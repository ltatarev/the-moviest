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
export class ReviewService {
    private reviewUrl = "/api/review";

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
                    this.router.navigate(["searchResult"])
                })
            );
    }

    findAllReviews(): Observable<any> {
        return this.http
            .get<any>(this.reviewUrl + "/findAllReviews")
            .pipe(catchError(this.handleError<any>("findAllReviews")));
    }

    createReview(submittedReview: any): Observable<any> {
        // title, movie, rating, reviewText, authorId
        let authorId = this.userService.user.value._id;
        let review = { ...submittedReview, authorId };
        return this.http
            .post<any>(this.reviewUrl + "/createReview", review)
            .pipe(
                tap(res => this.showToastrSuccess(res.message)),
                catchError(this.handleError<any>("createReview"))
            );
    }

    updateReview(review: any): Observable<any> {
        // reviewId, title, rating, reviewText
        return this.http
            .put<any>(this.reviewUrl + "/updateReview", review)
            .pipe(catchError(this.handleError<any>("updateReview")));
    }

    deleteReview(reviewId: any): Observable<any> {
        // reviewId
        return this.http
            .delete<any>(this.reviewUrl + "/deleteReview", reviewId)
            .pipe(catchError(this.handleError<any>("deleteReview")));
    }
}
