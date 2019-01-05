import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required]
    });
    this.confirmationForm = this.fb.group({
      'username': ['', Validators.required],
      'confirmationCode': ['', Validators.required]
    });
  }

  onSubmitSignup(value: any) {
      console.log(value.email);
    const email = value.email, password = value.password, username = value.username, phone = value.phone;
    this.auth.signUp(username, password, email, phone)
      .subscribe(
        result => {
          this.successfullySignup = true;
        },
        error => {
          console.log(error);
        });
  }

  onSubmitConfirmation(value: any) {
    const username = value.username, confirmationCode = value.confirmationCode;
    this.auth.confirmSignUp(username, confirmationCode)
      .subscribe(
        result => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        });
  }
}
