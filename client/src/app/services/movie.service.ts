import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";

import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MovieService {
    private apiKey = "b5efa85196e4919222c431b10c08ef77";

    constructor(private http: HttpClient) {}

    private handleError<T>(operation: string = "operation", result?: T) {
        return (response: any): Observable<T> => {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return of(result as T);
        };
    }

    weeklyTrendingMovies() {
        let url =
            "https://api.themoviedb.org/3/trending/movie/week?api_key=" +
            this.apiKey;
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("movies")));
    }

    moviesInTheathers(page:any = 1) {
        let url =
            "https://api.themoviedb.org/3/discover/movie?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page.toString()+"&primary_release_year=2019";
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("movies")));
    }

    getMovieById(id) {
        let url =
            "https://api.themoviedb.org/3/movie/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("movies")));
    }

    searchByName(query,page:any = 1) {
        let url =
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page="+page.toString()+"&include_adult=false";
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("tv")));
    }
}
