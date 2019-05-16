import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // newItem = '';
  // items = [{
  //   name: 'Feed the cat'},
  //   {
  //     name: 'Do the shopping'}];
  constructor() { }

  ngOnInit() {
  }
//   addItem(event){
//     if (this.newItem) {
//     this.items.push({
//       name: this.newItem
//     });
//     }
//     this.newItem = '';
//   }
//   delete(event){
// console.log(event);
//   }
}
