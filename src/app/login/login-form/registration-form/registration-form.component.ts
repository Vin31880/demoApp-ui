import {Component, OnInit} from '@angular/core';
import {User} from '../../service/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public user: User = new User();
  registrationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: LoginService) {
    this.initFormGroup();
  }

  ngOnInit() {
  }

  initFormGroup() {
    this.registrationFormGroup = this.formBuilder.group({
      'email': [],
      'userName': [],
      'password': [],
      'userRole': []
    });
  }

  copyValuesFromFormGroupToModel() {
    this.user.email = this.registrationFormGroup.controls['email'].value;
    this.user.username = this.registrationFormGroup.controls['userName'].value;
    this.user.password = this.registrationFormGroup.controls['password'].value;
    this.user.role = this.registrationFormGroup.controls['userRole'].value;
  }

  saveUser() {
    this.copyValuesFromFormGroupToModel();
    this.userService.save(this.user).subscribe((newUser: User) => {
      this.user = newUser;
    });
  }
}
