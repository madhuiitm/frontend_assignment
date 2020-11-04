import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginGuard } from './guards/login.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent, canActivate:[LoginGuard] },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin-login', component: AdminloginComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'admin-profile', component: AdminProfileComponent, canActivate:[LoginGuard] },
  { path: 'user-management', component: UserManagementComponent, canActivate:[LoginGuard] },

  {path: 'forgot', component: ForgotPasswordComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
