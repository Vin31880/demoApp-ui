import {NgModule} from '@angular/core';
import {LoginService} from './service/login.service';
import {RegistrationFormComponent} from './login-form/registration-form/registration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login-form/login/login.component';
import {TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [RegistrationFormComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule
  ],
  providers: [LoginService],
  exports: [RegistrationFormComponent, LoginComponent]
})
export class LoginModule {

}
