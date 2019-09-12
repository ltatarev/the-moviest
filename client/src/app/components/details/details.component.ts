import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";
import { ReviewService } from "src/app/services/review.service";
import { WatchlistService } from "src/app/services/watchlist.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
    public data: any = {};
    public temp: any;

    public isWatchlist: boolean = false;

    // * check if current user is the owner of data
    public isOwner: boolean = false;

    public movieHover: boolean = false;

    constructor(
        private dataProvider: DataProviderService,
        private watchlistService: WatchlistService,
        private reviewService: ReviewService,
        private userService: UserService,
        private router: Router
    ) {
        // * this.temp = {review: , type:"review"} OR {watchlist:, type:"watchlist"}
        this.temp = this.dataProvider.data;

        let userId = this.userService.user.value._id;

        // * check if its review or watchlist
        if (this.temp.type) {
            switch (this.temp.type) {
                case "review":
                    if (this.temp.review.author_id._id === userId) {
                        this.isOwner = true;
                    }
                    this.parseReview(this.temp.review);
                    break;
                case "watchlist":
                    if (this.temp.watchlist.author_id._id === userId) {
                        this.isOwner = true;
                    }
                    this.parseWatchlist(this.temp.watchlist);
                    break;
            }
        }
    }

    ngOnInit() {}

    private parseReview(review) {
        // * parse data for displaying
        let { title, movie, likes, rating, author_id, reviewText } = review;
        this.data.title = title;
        this.data.img = movie.moviePosterPath ? movie.moviePosterPath : "";
        this.data.subtitle = movie.movieTitle;
        this.data.likes = likes;
        this.data.body = ["Rating: " + this.starRating(rating), reviewText];
        this.data.footer = "Written by: " + author_id.username;
    }

    private parseWatchlist(watchlist) {
        this.isWatchlist = true;
        // * parse data for displaying
        let { title, description, likes, movies, author_id } = watchlist;

        this.data.title = title;
        this.data.subtitle = description;
        this.data.likes = likes;
        this.data.img = movies.length ? movies[0].moviePosterPath : "";
        this.data.body = movies.map(movie => movie.movieTitle);
        this.data.footer = "Created by: " + author_id.username;
    }

    // * like
    public like() {
        switch (this.temp.type) {
            case "review":
                this.reviewService
                    .likeReview(this.temp.review._id)
                    .subscribe(res => (this.data.likes += 1));

                break;
            case "watchlist":
                this.watchlistService
                    .likeWatchlist(this.temp.watchlist._id)
                    .subscribe(res => (this.data.likes += 1));
                break;
        }
    }

    // * delete
    private delete() {
        switch (this.temp.type) {
            case "review":
                this.reviewService
                    .deleteReview(this.temp.review._id)
                    .subscribe(res => this.router.navigate(["reviews"]));

                break;
            case "watchlist":
                this.watchlistService
                    .deleteWatchlist(this.temp.watchlist._id)
                    .subscribe(res => this.router.navigate(["watchlists"]));
                break;
        }
    }

    private starRating(num: number) {
        switch (num) {
            case 1:
                return "🌟";
            case 2:
                return "🌟🌟";
            case 3:
                return "🌟🌟🌟";
            case 4:
                return "🌟🌟🌟🌟";
            case 5:
                return "🌟🌟🌟🌟🌟";
            default:
                return "🌟";
        }
    }

    public deleteFromWatchlist(movie) {
        let watchlistId = this.temp.watchlist._id;
        let movieId = this.temp.watchlist.movies.filter(
            movies => movies.movieTitle === movie
        )[0]._id;

        this.watchlistService
            .deleteMovieFromWatchlist(watchlistId, movieId)
            .subscribe();
    }

    public toggleMovieHover() {
        this.movieHover = !this.movieHover;
        setTimeout(() => (this.movieHover = !this.movieHover), 10000);
    }
}
