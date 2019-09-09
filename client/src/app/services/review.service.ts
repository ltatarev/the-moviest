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
export class ReviewService {
    private reviewUrl = "/api/review";

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

    findReviewsByAuthor(id: any): Observable<any> {
        let params = new HttpParams().set("id", id);
        return this.http
            .get<any>(this.reviewUrl + "/findReviewsByAuthor", { params })
            .pipe(catchError(this.handleError<any>("findReviewsByAuthor")));
    }

    findReviewByMovie(movieTitle: any): Observable<any> {
        let params = new HttpParams().set("movieTitle", movieTitle);
        return this.http
            .get<any>(this.reviewUrl + "/findReviewByMovie", { params })
            .pipe(
                tap(response => {
                    if (!response.reviews.length) {
                        this.toasterService.error("No reviews found!");
                        return;
                    }
                    this.showToastrSuccess(response.message);
                    console.log(response.reviews);
                })
            );
    }
}
