import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
