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
    // boolean for displaying "delete/update review"
    public isOwner: boolean = false;

    constructor(
        private userService: UserService,
        private reviewService: ReviewService,
        private activatedRoute: ActivatedRoute,
        private dataProvider: DataProviderService,
        private router: Router
    ) {
        let currentUserId = this.userService.user.value._id;

        this.dataProvider.removeData();

        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                // if there is an id, find only reviews for that id
                this.id = params.id;
                this.isOwner = this.id === currentUserId;
                this.getReviewsByAuthor(this.id);
            } else {
                // else show all reviews
                this.getAllReviews();
            }
        });
    }

    ngOnInit() {}

    // todo: sort by date created and movie name

    private getReviewsByAuthor(id) {
        return this.reviewService.findReviewsByAuthor(id).subscribe(res => {
            this.reviews = res.reviews;
        });
    }

    private getAllReviews() {
        return this.reviewService.findAllReviews().subscribe(res => {
            this.reviews = res.reviews;
        });
    }

    public openReview(review) {
        this.dataProvider.setData({ review, type: "review" });
        this.router.navigate(["details"]);
    }
}
