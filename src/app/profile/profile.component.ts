import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  myform: FormGroup;

  constructor(private token: TokenStorageService, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      username: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required,  Validators.minLength(3),Validators.maxLength(8)]]
      });
    this.currentUser = this.token.getUser();
    this.authService.getUserDetails(this.currentUser.username).subscribe(res => {
      let data = res;
      console.log(data);
      this.myform.patchValue({
          'name': data['name'] ?  data['name'] : '',
          'username': data['username'] ?  data['username'] : '',
          'gender': data['gender'] ?  data['gender'] : '',
          'contactNumber': data['contactNumber'] ?  data['contactNumber'] : '',
          'email': data['email'] ?  data['email'] : '',
          'address': data['name'] ?  data['address'] : ''
      })
    })
}

update() {
  
}

}
