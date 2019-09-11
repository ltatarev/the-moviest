import { Component } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";
import { Router } from "@angular/router";
import { TvService } from "src/app/services/tv.service";
import { MovieService } from "src/app/services/movie.service";

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

    private currentPage: any = 1;
    private nextPage: any = 2;
    private prevPage: any = 0;
    private lastPage: any;

    private type: any;

    constructor(
        private tvService: TvService,
        private movieService: MovieService,
        private dataProvider: DataProviderService,
        private router: Router
    ) {
        this.data = this.dataProvider.data;
        this.search = this.dataProvider.data.search;

        this.type = this.data.type;

        switch (this.type) {
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
                this.lastPage = this.data.res.total_pages - 1;
                break;
            case "movie":
                this.parseMovie(this.data.res.results);
                this.title = "Movies";
                this.lastPage = this.data.res.total_pages - 1;
                break;
        }
    }

    public parseReview(data) {
        for (let review of data) {
            this.displayData.push({
                title: review.title,
                subtitle: review.movie.movieTitle,
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
        this.displayData = [];
        for (let tv of data) {
            if (!tv.overview && !tv.poster_path) {
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
            if (!movie.overview && !movie.poster_path) {
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

    public navigateTo(data, i) {
        switch (this.data.type) {
            case "reviews":
                this.dataProvider.removeData();
                this.dataProvider.setData({
                    review: this.data.reviews[i],
                    type: "review"
                });
                this.router.navigate(["details"]);
                break;
            case "watchlist":
                this.dataProvider.removeData();
                this.dataProvider.setData({
                    watchlist: this.data.watchlists[i],
                    type: "watchlist"
                });
                this.router.navigate(["details"]);
                break;
            case "tvShow":
                this.router.navigate(["tv", data.id]);
                break;
            case "movie":
                this.router.navigate(["movie", data.id]);
                break;
        }
    }

    public goToNextPage() {
        switch (this.type) {
            case "tvShow":
                if (this.currentPage < this.lastPage) {
                    this.tvService
                        .searchByName(this.search, this.nextPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseTv(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(1);
                }
                break;
            case "movie":
                if (this.currentPage < this.lastPage) {
                    this.movieService
                        .searchByName(this.search, this.nextPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseMovie(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(1);
                }
                break;
        }
    }

    public goToPrevPage() {
        switch (this.type) {
            case "tvShow":
                if (this.currentPage > 1) {
                    this.tvService
                        .searchByName(this.search, this.prevPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseTv(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(-1);
                }
                break;
            case "movie":
                if (this.currentPage > 1) {
                    this.movieService
                        .searchByName(this.search, this.prevPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseMovie(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(-1);
                }
                break;
        }
    }

    public goToLastPage() {
        switch (this.type) {
            case "tvShow":
                if (this.currentPage < this.lastPage) {
                    this.tvService
                        .searchByName(this.search, this.lastPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseTv(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(this.lastPage - this.currentPage);
                }
                break;
            case "movie":
                if (this.currentPage < this.lastPage) {
                    this.movieService
                        .searchByName(this.search, this.lastPage)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseMovie(this.data);
                            window.scroll(0, 0);
                        });
                }
                this.updatePages(this.lastPage - this.currentPage);
                break;
        }
    }

    public goToFirstPage() {
        switch (this.type) {
            case "tvShow":
                if (this.currentPage > 1) {
                    this.tvService
                        .searchByName(this.search, 1)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseTv(this.data);
                            window.scroll(0, 0);
                        });
                    this.updatePages(1 - this.currentPage);
                }
                break;
            case "movie":
                if (this.currentPage > 1) {
                    this.movieService
                        .searchByName(this.search, 1)
                        .subscribe(res => {
                            this.data = res.results;
                            this.parseMovie(this.data);
                            window.scroll(0, 0);
                        });
                }
                this.updatePages(1 - this.currentPage);
                break;
        }
    }

    private updatePages(change: number) {
        this.currentPage += change;
        this.nextPage = this.currentPage + 1;
        this.prevPage = this.currentPage - 1;
    }
}
