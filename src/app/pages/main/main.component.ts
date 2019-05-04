import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  public menuItem;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.menuItem = this.service.getMenuItem();
  }

}
