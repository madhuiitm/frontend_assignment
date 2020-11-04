import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.myform = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(10)]],
  username: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
  email: ['', [Validators.required, Validators.email]],
  gender: ['', [Validators.required]],
  contactNumber: ['', [Validators.required]],
  address: ['', [Validators.required]],
  password: ['', [Validators.required,  Validators.minLength(3),Validators.maxLength(8)]],
  confirmPassword: ['', [Validators.required,  Validators.minLength(3),Validators.maxLength(8)]]
  });
}

  onSubmit() {
    this.authService.register(this.myform.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  clearFields() {
    this.myform.reset();
  }
}
