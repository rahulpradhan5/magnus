import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composemessage',
  templateUrl: './composemessage.component.html',
  styleUrls: ['./composemessage.component.css']
})
export class ComposemessageComponent implements OnInit {

  sms: string = '';

  formData = {
    subject: '',
    message: ''
    // date: Date;
  };

  msgs?: Observable<any[]>;

  constructor(private firestore: AngularFirestore, public aff: AngularFireAuth) {
    // this.msgs = firestore.collection('messages').valueChanges();
  }

  onSubmit() {
    this.aff.user.subscribe(data => {

      // this.formData.date = new Date();

      this.firestore.collection('users').doc(data?.uid).collection('messages').add(this.formData)
        .then(res => {
          console.log('Message added with ID: ', res.id)
          this.sms = "Message Sent Successfully"
          this.firestore.collection('users').doc(data?.uid).collection('messages').doc(res.id).set({ "id": res.id }, { merge: true })

        })
        .catch(err => console.log(err));
    })

  }

  getData(): Observable<any[]> {
    return this.firestore.collection('messages').valueChanges();
  }

  ngOnInit(): void {
  }

}
