import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TvService {
    private apiKey = "b5efa85196e4919222c431b10c08ef77";

    constructor(private http: HttpClient, private router: Router) {}

    private handleError<T>(operation: string = "operation", result?: T) {
        return (response: any): Observable<T> => {
            console.log(response.error.errmsg, response.statusText);
            alert("Error has occured. Please try again.");
            return of(result as T);
        };
    }

    weeklyTrendingTv() {
        let url =
            "https://api.themoviedb.org/3/trending/tv/week?api_key=" +
            this.apiKey;
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("tv")));
    }

    discoverTV(page:any = 1) {
        let url =
            "https://api.themoviedb.org/3/discover/tv?api_key=" +
            this.apiKey +
            "&language=en-US&sort_by=popularity.desc&first_air_date_year=2016&page="+page.toString+"&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en";
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("tv")));
    }

    getTvById(id) {
        let url =
            "https://api.themoviedb.org/3/tv/" +
            id.toString() +
            "?api_key=" +
            this.apiKey +
            "&language=en-US";
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("tv")));
    }

    searchByName(query,page:any = 1) {
        let url =
            "https://api.themoviedb.org/3/search/tv?api_key=" +
            this.apiKey +
            "&language=en-US&query=" +
            query.toString() +
            "&page="+page.toString();
        return this.http
            .get<any>(url)
            .pipe(catchError(this.handleError<any>("tv")));
    }
}
