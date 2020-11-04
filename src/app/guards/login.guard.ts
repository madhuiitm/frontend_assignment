import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private routerNavigate: Router,
    private auth: AuthService
  ) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
        this.routerNavigate.navigate(['login']);
        return false;
      }
    return true;
  }
}
