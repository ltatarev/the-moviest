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
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError<any>('tv')
      ));
  }

  discoverTV(){
    let url = "https://api.themoviedb.org/3/discover/tv?api_key=b5efa85196e4919222c431b10c08ef77&language=en-US&sort_by=popularity.desc&first_air_date_year=2016&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en";
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError<any>('tv')
      ));
  }

  getTvById(id){
    let url = 'https://api.themoviedb.org/3/tv/'+id.toString()+'?api_key=b5efa85196e4919222c431b10c08ef77&language=en-US'
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError<any>('tv')
      ))
  }

  searchByName(query){
    let url = "https://api.themoviedb.org/3/search/tv?api_key=b5efa85196e4919222c431b10c08ef77&language=en-US&query="+query.toString()+"&page=1";
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError<any>('tv')
      ))
  }

}
