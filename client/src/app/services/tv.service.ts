import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

import { Token } from '../classes/token';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private handleError<T>(operation: string = "operation", result?: T) {
    return (response: any): Observable<T> => {
      console.log(response.error.errmsg, response.statusText);
      alert("Error has occured. Please try again.")
      return of(result as T);
    }
  }

  weeklyTrendingTv() {
    let url = "https://api.themoviedb.org/3/trending/tv/week?api_key=b5efa85196e4919222c431b10c08ef77";
    return this.http.get<any>(url);
  }


}
