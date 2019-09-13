import { Component, OnInit } from "@angular/core";
import { ReviewService } from "src/app/services/review.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { DataProviderService } from "src/app/services/data-provider.service";

@Component({
    selector: "app-reviews",
    templateUrl: "./reviews.component.html",
    styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit {
    public id: any;
    public reviews: any;

    private currentPage: number = 1;
    private nextPage: number = 2;
    private prevPage: number = 0;
    private lastPage: number;

    public sort = 1;

    public isEmpty: boolean = true;

    constructor(
        private userService: UserService,
        private reviewService: ReviewService,
        private activatedRoute: ActivatedRoute,
        private dataProvider: DataProviderService,
        private router: Router
    ) {
        this.dataProvider.removeData();

        // * check if you need fetch all or just specific users' watchlists
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                // if there is an id, find only reviews for that id
                this.id = params.id;
                this.getReviewsByAuthor(this.id);
            } else {
                // else show all reviews
                this.getAllReviews();
            }
        });
    }

    ngOnInit() { }

    // * get all watchlists from a specific user
    private getReviewsByAuthor(id) {
        return this.reviewService.findReviewsByAuthor(id, 0).subscribe(res => {
            this.reviews = res.reviews;
            this.isEmpty = !this.reviews.length;
        });
    }

    // * get all watchlists
    private getAllReviews() {
        return this.reviewService.findAllReviews(0).subscribe(res => {
            this.reviews = res.reviews;
            this.isEmpty = !this.reviews.length;
        });
    }

    // * open review details
    public openReview(review) {
        this.dataProvider.setData({ review, type: "review" });
        this.router.navigate(["details"]);
    }

    // * pagination
    public goToNextPage() {
        if (this.currentPage < this.lastPage) {
            if (this.id) {
                this.reviewService
                    .findReviewsByAuthor(this.id, this.nextPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            } else {
                this.reviewService
                    .findAllReviews(this.nextPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            }
        }
    }

    public goToPrevPage() {
        if (this.currentPage > 1) {
            if (this.id) {
                this.reviewService
                    .findReviewsByAuthor(this.id, this.prevPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            } else {
                this.reviewService
                    .findAllReviews(this.prevPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            }
            this.updatePages(-1);
        }
    }

    public goToLastPage() {
        if (this.currentPage < this.lastPage) {
            if (this.id) {
                this.reviewService
                    .findReviewsByAuthor(this.id, this.lastPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            } else {
                this.reviewService
                    .findAllReviews(this.lastPage)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            }
            this.updatePages(this.lastPage - this.currentPage);
        }
    }

    public goToFirstPage() {
        if (this.currentPage > 1) {
            if (this.id) {
                this.reviewService
                    .findReviewsByAuthor(this.id, 0)
                    .subscribe(res => {
                        this.reviews = res.reviews;
                        window.scroll(0, 0);
                    });
            } else {
                this.reviewService.findAllReviews(0).subscribe(res => {
                    this.reviews = res.reviews;
                    window.scroll(0, 0);
                });
            }
            this.updatePages(1 - this.currentPage);
        }
    }

    private updatePages(change: number) {
        this.currentPage += change;
        this.nextPage = this.currentPage + 1;
        this.prevPage = this.currentPage - 1;
    }

    sortByTitle() {
      
        if (this.id) {
            this.reviewService
                .sortByMovieTitle(this.id, this.sort)
                .subscribe(res => {
                    console.log(res)
                    this.reviews = res.reviews;
                    window.scroll(0, 0);
                });
        } else {
            this.reviewService
                .sortByMovieTitle(0, this.sort)
                .subscribe(res => {
                    console.log(res)
                   // this.reviews = res.reviews;
                    window.scroll(0, 0);
                });
        };
        this.sort = -this.sort;
    }


}
