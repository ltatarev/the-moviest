import { Component, OnInit } from "@angular/core";
import { ReviewService } from "src/app/services/review.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-reviews",
    templateUrl: "./reviews.component.html",
    styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit {
    public id: any;
    public reviews: any;
    // boolean for displayin "delete/update review"
    public isOwner: boolean;

    constructor(
        private userService: UserService,
        private reviewService: ReviewService,
        private activatedRoute: ActivatedRoute
    ) {
        let currentUserId = this.userService.user.value._id;

        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.isOwner = this.id === currentUserId;
            this.getReviews(this.id);
        });
    }

    ngOnInit() {}

    private getReviews(id) {
        return this.reviewService.findReviewsByAuthor(id).subscribe(res => {
            console.log(res.message);
            this.reviews = res.reviews;
        });
    }
}
