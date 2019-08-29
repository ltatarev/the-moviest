import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

import { User } from '../classes/user';
import { Token } from '../classes/token';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = '/api/user';

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
    if(this.isLoggedIn()) {
      this.loggedIn.next(true);
      this.user.next(this.credentials());
    }
  }
  
  isLoggedIn() {
    let token = Token.get();
    if (token) {
      let payload = Token.parse(token);
      return payload.exp > Date.now() / 1000;
    } else return false;
  }

  credentials(): any {
    if (this.isLoggedIn()) {
      let token = Token.get();
      let payload = Token.parse(token);
      delete payload['exp'];
      delete payload['iat'];
      console.log(payload);
      return payload;
    }  
  }

  saveToken(token: string) {
    Token.save(token);
    this.loggedIn.next(this.isLoggedIn());
    this.user.next(this.credentials());
  }


  private handleError<T>(operation: string = "operation", result?: T) {
    return (response: any): Observable<T> => {
      console.log(response.error.errmsg, response.statusText);
      alert("Error has occured. Please try again.")
      return of(result as T);
    }
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.userUrl+ "/register", user)
              .pipe(
                tap(
                  (response: { token: string, message: string }) => {
                    this.saveToken(response.token);
                    this.router.navigate(['home']);
                  }
                ),
                catchError(this.handleError<any>('register', user))
              )
  }
  
  login(user: User): Observable<any> {
    return this.http.post<any>(this.userUrl + "/login", user)
              .pipe(
                tap(
                  (response: { token: string, message: string }) => {
                    this.saveToken(response.token);
                    this.router.navigate(['home']);
                  }
                ),
                catchError(this.handleError<any>('login', user))
              )
  }

  logout() {
    this.router.navigate(['/login']);
    this.loggedIn.next(false);
    this.user.next(null);
    Token.remove();
  }

  authHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${Token.get() ? Token.get() : ""}`
    });
  }

}
