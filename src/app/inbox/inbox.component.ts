import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  showDiv = false;
  constructor() { }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  ngOnInit(): void {
  }

}
