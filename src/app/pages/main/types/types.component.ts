import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  public types;
  constructor(private service: MainService,
              private router: Router) {
  }

  ngOnInit() {
    this.types = this.service.getTypes();
  }

}
