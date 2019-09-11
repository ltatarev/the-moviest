import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
    public data: any = {};
    public temp: any;

    public isWatchlist: boolean = false;

    constructor(private dataProvider: DataProviderService) {
        this.temp = this.dataProvider.data;

        if (this.temp.type) {
            switch (this.temp.type) {
                case "review":
                    this.parseReview(this.temp.review);
                    break;
                case "watchlist":
                    this.parseWatchlist(this.temp.watchlist);
                    break;
            }
        }
    }

    ngOnInit() {}

    private parseReview(review) {
        this.data.title = review.title;
        this.data.img = review.movie.moviePosterPath
            ? review.movie.moviePosterPath
            : "";
        this.data.subtitle = review.movie.movieTitle;
        this.data.body = ["Rating: " + review.rating + "/5", review.reviewText];
        this.data.footer = "Written by: " + review.author_id.username;
    }

    private parseWatchlist(watchlist) {
        this.isWatchlist = true;
        this.data.title = watchlist.title;
        this.data.subtitle = watchlist.description;
        this.data.img = watchlist.movies.length
            ? watchlist.movies[0].moviePosterPath
            : "";

        this.data.body = watchlist.movies.map(movie => movie.movieTitle);

        this.data.footer = "Created by: " + watchlist.author_id.username;
    }
}
