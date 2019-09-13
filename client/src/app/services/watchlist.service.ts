import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient, HttpParams } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class WatchlistService {
    private watchlistUrl = "/api/watchlist";

    constructor(
        private http: HttpClient,
        private router: Router,
        private toasterService: ToastrService,
        private userService: UserService
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

    findWatchlistsByAuthor(id: any, page: any): Observable<any> {
        let params = new HttpParams().set("id", id).set("page", page);
        return this.http
            .get<any>(this.watchlistUrl + "/findWatchlistsByAuthor", { params })
            .pipe(catchError(this.handleError<any>("findWatchlistsByAuthor")));
    }

    findWatchlistsByName(name: any, page: any): Observable<any> {
        let params = new HttpParams().set("title", name).set("page", page);
        return this.http
            .get<any>(this.watchlistUrl + "/findWatchlistsByName", { params })
            .pipe(
                tap(response => {
                    if (!response.watchlists.length) {
                        this.toasterService.error("No watchlists found!");
                        return;
                    }
                    this.showToastrSuccess(response.message);
                    this.router.navigate(["searchResult"]);
                })
            );
    }

    findAllWatchlists(page: any): Observable<any> {
        let params = new HttpParams().set("page", page);

        return this.http
            .get<any>(this.watchlistUrl + "/findAllWatchlists", { params })
            .pipe(catchError(this.handleError<any>("findAllWatchlists")));
    }

    createWatchlist(submittedWatchlist: any): Observable<any> {
        // title, description, authorId
        let authorId = this.userService.user.value._id;
        let watchlist = { ...submittedWatchlist, authorId };
        return this.http
            .post<any>(this.watchlistUrl + "/createWatchlist", watchlist)
            .pipe(
                tap(response => this.showToastrSuccess(response.message)),
                catchError(this.handleError<any>("createWatchlist"))
            );
    }

    addMovieToWatchlist(watchlist: any): Observable<any> {
        // watchlistId, movieId, movieTitle, moviePosterPath
        return this.http
            .post<any>(this.watchlistUrl + "/addMovieToWatchlist", watchlist)
            .pipe(
                tap(response => this.showToastrSuccess(response.message)),
                catchError(this.handleError<any>("addMovieToWatchlist"))
            );
    }

    likeWatchlist(watchlistId: any): Observable<any> {
        // watchlistId
        return this.http
            .post<any>(this.watchlistUrl + "/likeWatchlist", { watchlistId })
            .pipe(catchError(this.handleError<any>("likeWatchlist")));
    }

    updateTitleOrDescription(watchlist: any): Observable<any> {
        // watchlistId,title,description
        return this.http
            .put<any>(
                this.watchlistUrl + "/updateTitleOrDescription",
                watchlist
            )
            .pipe(
                catchError(this.handleError<any>("updateTitleOrDescription"))
            );
    }

    deleteWatchlist(watchlistId: any): Observable<any> {
        // watchlistId
        let params = new HttpParams().set("watchlistId", watchlistId);
        return this.http
            .delete<any>(this.watchlistUrl + "/deleteWatchlist", { params })
            .pipe(catchError(this.handleError<any>("deleteWatchlist")));
    }

    deleteMovieFromWatchlist(watchlistId: any, movieId: any): Observable<any> {
        // watchlistId, movieId
        let params = new HttpParams()
            .set("watchlistId", watchlistId)
            .set("movieId", movieId);

        return this.http
            .delete<any>(this.watchlistUrl + "/deleteMovieFromWatchlist", {
                params
            })
            .pipe(
                catchError(this.handleError<any>("deleteMovieFromWatchlist"))
            );
    }

    sortByTitle(id: any = 0, sort: any) {
        if (id) {
            let params = new HttpParams().set("sort", sort).set("id", id);
            return this.http
                .get<any>(this.watchlistUrl + "/sortWatchlistsByTitleAndAuthor", { params })
                .pipe(
                    catchError(this.handleError<any>("sortWatchlistsByTitleAndAuthor")));
        } else {
            let params = new HttpParams().set("sort", sort);
            return this.http
                .get<any>(this.watchlistUrl + "/sortWatchlistsByTitle", { params })
                .pipe(
                    catchError(this.handleError<any>("sortWatchlistsByTitle")));
        }
    }
}
