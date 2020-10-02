import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerApiService} from '../../server-api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm;
  message: string;
  status = false;

  constructor(private formBuilder: FormBuilder, private service: ServerApiService, private route: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      checkbox: ['', [Validators.required]]
    });
  }

  registerUser(data): void {
    if (this.registerForm.dirty && data.name && data.password && data.checkbox) {
      this.service.registerUser(data).subscribe(res => {
        if (res) {
          this.route.navigate(['login']);
        }
      },
        error => {
            this.status = false;
            this.message = error.error;
    });
      this.registerForm.reset();
    }
  }

  get name(): any {
    return this.registerForm.get('name');
  }

  get password(): any {
    return this.registerForm.get('password');
  }

  get checkbox(): any {
    return this.registerForm.get('checkbox');
  }
}
