import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { addDoc } from '@firebase/firestore';
import { collection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private fireauth: AngularFireAuth, private router: Router, private afs: AngularFirestore) { }

  // login method
  login(email: string, password: string) {
    console.log(email, password)
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token', 'true');
      if (res.user?.emailVerified == true) {
        this.fireauth.user.subscribe(user => {
          this.afs.collection('users').doc(user?.uid + "/otherInfo/SecuriteDetails").get().subscribe(data => {
            if (data.exists) {

              this.router.navigate(['/profile-details']);
            } else {
              this.router.navigate(['dashboard']);
            }
          });

        });

      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // Otp Sending
  async send_otp(phone_no: string) {
    var otp_res = '';

    var api_key = "677cf049-8f77-11ed-9158-0200cd936042";
    let requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };

    let response = await fetch(`https://2factor.in/API/V1/${api_key}/SMS/+91${phone_no}/AUTOGEN2/OTP1`, requestOptions)
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj))
      .then((result) => {
        otp_res = result["OTP"];
        return result["OTP"];
      })
      .catch(error => console.log('error', error));

    console.log("opt_res", otp_res);
    return otp_res;

  }



  // register method
  register(email: string, password: string, name: string, mobileNo: string, invitationCode: string,branch:string) {
    this.afs.collection<Udata>('users', ref => ref.orderBy('id', 'desc').limit(1)).get().toPromise()
      .then((snapshot: any) => {
        let count = 1;
        if (snapshot && snapshot.size > 0) {
          const lastUid = snapshot.docs[0].data().id;
          count = parseInt(lastUid.substring(3)) + 1;
        }
        const serial = this.padNumber(count);
        const id = `MCS${serial}`;

        this.fireauth.createUserWithEmailAndPassword(email, password)
          .then((res: any) => {
            const user = res.user;
            user.updateProfile({
              displayName: id
            }).then(() => {
              this.http.get<any>('http://moneysagaconsultancy.com/api/api/insert?user_id=' + id + '&name=' + name + '&referal_id=' + invitationCode + '&position=' + branch).subscribe(response => {
                console.log(response);
              })
                this.afs.collection<Udata>('users').doc(user.uid).set({
                  id,
                  email,
                  fullName: name,
                  mobNum: mobileNo,
                  invitationid: invitationCode,
                  joiningDate: user.metadata.creationTime,
                }, { merge: true });
                alert('Registration Successful');
                this.router.navigate(['/login']);
             

            }).catch((err: any) => {
              console.error(err);
              alert(err.message);
              this.router.navigate(['/registration']);
            });
          })
          .catch((err) => {
            console.error(err);
            alert(err.message);
            this.router.navigate(['/registration']);
          });
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
        this.router.navigate(['/registration']);
      });
  }



  padNumber(number: number): string {
    return number.toString().padStart(9, '0');
  }



  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');

    }, err => {
      alert(err.message);
    })
  }


  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

}

interface Udata {
  email: string;
  fullName: string;
  mobNum: string;
  invitationid: string;
  joiningDate?: string;
  id?: string;
}
