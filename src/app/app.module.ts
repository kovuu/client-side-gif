import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {Interceptor} from './http-interceptors/interceptor';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AlertComponent } from './components/alert/alert.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ImagesBlockComponent } from './components/images-block/images-block.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MainPageComponent,
    AlertComponent,
    UploadImageComponent,
    ImagesBlockComponent,
    HeaderComponent,
    ProfileComponent,
    SearchComponent
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
