import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerApiService} from '../server-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder, private service: ServerApiService, private route: Router) {
    this.loginForm = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }


  loginUser(data): void {
    this.service.loginUser(data).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', `bearer ${res.token}`);
      localStorage.setItem('userId', res.id);
      console.log(localStorage.getItem('token'));
    });
  }
}
