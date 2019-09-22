import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  sorry = false;
  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  changeSorry() {
    setTimeout(() => {
      this.sorry = false;
    }, 3000);
  }

  login(form: FormGroup) {
    if (form.value.login === 'admin' && form.value.password === 'admin') {
      this.router.navigate(['/back-office']);
    } else {
      this.sorry = true;
      this.changeSorry();
    }
  }
}
