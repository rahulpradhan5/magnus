import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ComposemessageComponent } from '../composemessage/composemessage.component';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  // constructor() { }

  msgs: any;
  selected?: boolean;

  // constructor(private myService: ComposemessageComponent) {
  //   this.msgs = myService.getData();
  // }




  onDeleteRow(index: number) {
    const msg = this.msgs[index];
    // const user = this.aff.currentUser;

    if (confirm("Are you sure you want to delete this Message?")) {
      if (msg) {

        this.aff.user.subscribe(data => {
          this.afs.collection('users').doc(data?.uid).collection('messages').doc(msg.id).delete()
            .then(() => {
              console.log('Message deleted successfully');
              console.log(msg.id);
              this.msgs = this.msgs.slice(0, index).concat(this.msgs.slice(index + 1));
            })
            .catch(err => console.error(err));
        })

      }
    }

  }

  constructor(public afs: AngularFirestore, public aff: AngularFireAuth) {



    this.aff.user.subscribe(data => {

      this.afs.collection('users').doc(data?.uid).collection<any>('messages').valueChanges().forEach(
        msg => {
          console.log(msg);
          this.msgs = msg;
        }

      );

      // afs.collection<any>('messages').valueChanges().forEach(
      //   msg => {
      //     console.log(msg);
      //     this.msgs = msg;
    }


    );




  }

  ngOnInit(): void {

  }

  // onDeleteSelectedRows() {
  //   const selectedRows = this.msgs.filter(msg => msg.selected);
  //   if (selectedRows.length > 0) {
  //     if (confirm(`Are you sure you want to delete ${selectedRows.length} row(s)?`)) {
  //       selectedRows.forEach(msg => {
  //         this.afs.collection<Message>('users').doc(this.uid).collection<Message>('messages').doc(msg.id).delete()
  //           .then(() => console.log(`Message ${msg.id} successfully deleted`))
  //           .catch(error => console.error(`Error deleting message ${msg.id}`, error));
  //       });
  //       this.msgs = this.msgs.filter(msg => !msg.selected);
  //     }
  //   }
  // }

  // onDeleteRow(index: number) {
  // if (confirm("Are you sure you want to delete this Message?")) {
  //   this.msgs.splice(index, 1);

  // msg.forEach(m => {
  //   this.afs.collection('users').doc(data?.uid).collection<any>('messages').doc(m.id).delete()
  //     .then(() => {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.error("Error removing document: ", error);
  //     });
  // });
  // }
  // }



}
