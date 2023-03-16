
import { Component, OnInit } from '@angular/core';
// import AOS from 'aos';
// declare var AOS;
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'magnusApp';
  
 
  ngOnInit() {
    AOS.init({
      duration: 1200,
      });
  }
}



// import { Component, OnInit } from '@angular/core';
// import AOS from 'aos';
// declare var AOS;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   title = 'magnusApp';
  
//   ngOnInit() {
//     AOS.init({
//       duration: 1200,
//     });
//   }
// }

