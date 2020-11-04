import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { getLocaleWeekEndRange } from '@angular/common';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  isAuthenticated(): boolean {
    return !!this.tokenStorage.getToken();
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.name,
      username: user.username,
      contactNumber: user.contactNumber,      
      email: user.email,
      gender: user.gender,
      address: user.address,      
      password: user.password
    }, httpOptions);
  }


  getUserDetails(username): Observable<any> {
    return this.http.post('http://localhost:8080/api/getUserDetails', {
      username: username,
    }, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/api/getUsers');
  }
}
