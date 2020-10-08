import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {Interceptor} from './http-interceptors/interceptor';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { AlertComponent } from './components/alert/alert.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ImagesBlockComponent } from './components/images-block/images-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UsersListComponent,
    UserPageComponent,
    RegisterFormComponent,
    MainPageComponent,
    ErrorMsgComponent,
    AlertComponent,
    UploadImageComponent,
    ImagesBlockComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
