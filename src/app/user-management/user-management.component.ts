import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userList: any;

  constructor(private authService: AuthService,) { }

  ngOnInit() {
    this.authService.getUsers().subscribe(data => {
      this.userList = data.users;
      })
  }
 submit() {
   alert('not yet completed')
 }
}
