import { Component } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-search-result",
    templateUrl: "./search-result.component.html",
    styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent {
    private data: any;

    private displayData: any = [];
    private title: any;

    private search: any;

    constructor(
        private dataProvider: DataProviderService,
        private router: Router
    ) {
        this.data = this.dataProvider.data;
        this.search = this.dataProvider.data.search;

        switch (this.data.type) {
            case "reviews":
                this.parseReview(this.data.reviews);
                this.title = "Reviews";
                break;
            case "watchlist":
                this.parseWatchlist(this.data.watchlists);
                this.title = "Watchlists";
                break;
            case "tvShow":
                this.parseTv(this.data.res.results);
                this.title = "TV shows";
                break;
            case "movie":
                this.parseMovie(this.data.res.results);
                this.title = "Movies";
                break;
        }
    }

    public parseReview(data) {
        for (let review of data) {
            this.displayData.push({
                title: review.title,
                subtitle:
                    review.movie.movieTitle +
                    ", " +
                    review.rating.toString() +
                    "/5",
                body: review.reviewText
            });
        }
    }

    public parseWatchlist(data) {
        for (let watchlist of data) {
            let movieTitles = JSON.stringify(
                watchlist.movies.map(movie => movie.movieTitle)
            )
                .replace("[", "")
                .replace("]", "");
            this.displayData.push({
                title: watchlist.title,
                subtitle: watchlist.description,
                body: movieTitles,
                img: data.movies ? data.movies[0].moviePosterPath : ""
            });
        }
    }

    public parseTv(data) {
        for (let tv of data) {
            if (!tv.overview || !tv.vote_average || !tv.poster_path) {
                continue;
            }
            this.displayData.push({
                id: tv.id,
                title: tv.original_name,
                subtitle: tv.vote_average + "/10",
                body: tv.overview,
                img: tv.poster_path
                    ? "https://image.tmdb.org/t/p/w500/" + tv.poster_path
                    : ""
            });
        }
    }

    public parseMovie(data) {
        for (let movie of data) {
            if (!movie.overview || !movie.vote_average || !movie.poster_path) {
                continue;
            }
            this.displayData.push({
                id: movie.id,
                title: movie.original_title,
                subtitle: movie.vote_average + "/10",
                body: movie.overview,
                img: movie.poster_path
                    ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                    : ""
            });
        }
    }

    public navigateTo(data) {
        switch (this.data.type) {
            case "reviews":
                break;
            case "watchlist":
                break;
            case "tvShow":
                this.router.navigate(["tv", data.id]);
                break;
            case "movie":
                this.router.navigate(["movie", data.id]);
                break;
        }
    }
}
