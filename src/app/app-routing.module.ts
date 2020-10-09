import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UploadImageComponent} from './components/upload-image/upload-image.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserPageComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'upload', component: UploadImageComponent},
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
