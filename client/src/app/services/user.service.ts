import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      if (error.status == '409') {
        errorMessage = 'Project already exists!';
      } 
      else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
