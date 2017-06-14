import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login-form/login/login.component';
import {RegistrationFormComponent} from './login/login-form/registration-form/registration-form.component';
import {WelcomeComponent} from './base/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'base',
    component: WelcomeComponent
  },
  {
    path: 'register',
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

