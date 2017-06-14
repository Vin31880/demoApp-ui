import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {User} from '../../service/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.initFormGroup();
  }

  ngOnInit() {
  }

  initFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      'userName': [],
      'password': []
    });
  }

  login() {
    this.loginService.authenticateUser(this.loginFormGroup.controls['userName'].value,
      this.loginFormGroup.controls['password'].value).subscribe((isValidUser: boolean) => {
      if (isValidUser) {
        this.router.navigate(['base']);
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
