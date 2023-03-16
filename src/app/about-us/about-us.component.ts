import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { ElementRef, Inject, } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  selectedValue = '';


  getValue() {
    console.log(this.selectedValue);
  }

  constructor(private aboutservice: AboutService) {
    this.aboutservice.getItem().subscribe(items => {
      console.log(items);
      if (items.length == 0) console.log("nothing");
    })

  }

  ngOnInit(): void {

  }

}