import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient, HttpParams } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: "root"
})
export class WatchlistService {
    private watchlistUrl = "/api/watchlist";

    constructor(
        private http: HttpClient,
        private router: Router,
        private toasterService: ToastrService
    ) {}

    private handleError<T>(operation: string = "operation", result?: T) {
        return (response: any): Observable<T> => {
            this.toasterService.error(
                response.error.message,
                "Error has occured. Please try again."
            );
            this.router.navigate(["welcome"]);
            return of(result as T);
        };
    }

    showToastrSuccess(message) {
        return this.toasterService.success(message, "Success!", {
            closeButton: true
        });
    }

    findWatchlistsByAuthor(id: any): Observable<any> {
        let params = new HttpParams().set("id", id);
        return this.http
            .get<any>(this.watchlistUrl + "/findWatchlistsByAuthor", { params })
            .pipe(catchError(this.handleError<any>("findWatchlistsByAuthor")));
    }

    findWatchlistsByName(name: any): Observable<any> {
        let params = new HttpParams().set("title", name);
        return this.http
            .get<any>(this.watchlistUrl + "/findWatchlistsByName", { params })
            .pipe(
                tap(response => {
                    if (!response.watchlists.length) {
                        this.toasterService.error("No reviews found!");
                        return;
                    }
                    this.showToastrSuccess(response.message);
                    // TODO: OPEN SEARCH RESULT COMPONENT
                    console.log(response);
                })
            );
    }
}
