import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation: string = "operation", result?: T) {
    return (response: any): Observable<T> => {
      console.log(response.error.errmsg, response.statusText);
      alert("Error has occured. Please try again.")
      return of(result as T);
    }
  }

  weeklyTrendingMovies() {
    let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=b5efa85196e4919222c431b10c08ef77";
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('movies')
        ));
  }


  moviesInTheathers() {
    let url = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2018-11-20";
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('movies')
        ))
  }

}