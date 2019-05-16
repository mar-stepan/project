import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  sorry = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeSorry() {
    setTimeout(() => {
      this.sorry = false;
    }, 3000);
  }

  login() {
    if (this.userName === 'admin' && this.password === 'admin') {
      this.router.navigate(['/back-office']);
    } else {
      this.sorry = true;
      this.changeSorry();
    }
  }
}
