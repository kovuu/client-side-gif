import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerApiService} from '../server-api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm;

  constructor(private formBuilder: FormBuilder, private service: ServerApiService, private route: Router) {
    this.registerForm = this.formBuilder.group({
      name: '',
      password: ''
    });
  }


  registerUser(data): void {
    this.service.registerUser(data).subscribe(res => {
      if (res) {
        this.route.navigate(['login']);
      }
    });
  }
}
