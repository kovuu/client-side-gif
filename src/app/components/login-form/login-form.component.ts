import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerApiService} from '../../server-api.service';
import {HelperService} from '../../helper.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm;
  message: string;
  status = false;

  constructor(private formBuilder: FormBuilder, private service: ServerApiService,
              private route: Router, private helperService: HelperService) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(data): void {
    if (this.loginForm.dirty && data.name && data.password) {
        this.service.loginUser(data).subscribe(res => {
          localStorage.setItem('token', `bearer ${res.token}`);
          localStorage.setItem('userId', res.id);
          this.status = true;
          this.message = 'Successful login!';
          this.helperService.updateLoginStatus();
          this.route.navigate(['']);
        },
          error => {
          this.status = false;
          this.message = error.reason;
        });
        this.loginForm.reset();
    }
  }

  get name(): any {
    return this.loginForm.get('name');
  }

  get password(): any {
    return this.loginForm.get('password');
  }
}
