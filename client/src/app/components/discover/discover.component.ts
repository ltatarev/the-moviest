import { Component, OnInit } from "@angular/core";
import { TvService } from "../../services/tv.service";
import { MovieService } from "../../services/movie.service";
import { forkJoin, fromEventPattern } from "rxjs";

@Component({
    selector: "app-discover",
    templateUrl: "./discover.component.html",
    styleUrls: ["./discover.component.css"]
})
export class DiscoverComponent implements OnInit {
    public tv: any;
    public tvDisplay: any;
    public movies: any;
    public moviesDisplay: any;

    public moviePage: number = 0;
    public tvPage: number = 0;

    constructor(
        private tvService: TvService,
        private movieService: MovieService
    ) {}

    ngOnInit() {
        // simulate 2 requests - TV & movie service
        forkJoin(
            this.movieService.moviesInTheathers(),
            this.tvService.discoverTV()
        ).subscribe(([resMovie, resTv]) => {
            this.movies = this.posterMovie(resMovie);
            this.tv = this.posterTv(resTv);
            this.parseMovie(0);
            this.parseTv(0);
        });
    }

    posterTv(tv) {
        let newTv = tv.results;
        newTv.poster_path = tv.results.map(
            tvs =>
                (tvs.poster_path =
                    "https://image.tmdb.org/t/p/w500" + tvs.poster_path)
        );
        return newTv;
    }

    posterMovie(movie) {
        let newMovie = movie.results;
        newMovie.poster_path = movie.results.map(
            movies =>
                (movies.poster_path =
                    "https://image.tmdb.org/t/p/w500" + movies.poster_path)
        );
        return newMovie;
    }

    parseTv(num: number) {
        if (this.tvPage === 0 && num === -4) {
            this.tvPage = 16;
        } else {
            this.tvPage = (this.tvPage + num) % 20;
        }
        this.tvDisplay = this.tv.slice(this.tvPage, this.tvPage + 4);
    }

    parseMovie(num: number) {
        if (this.moviePage === 0 && num === -4) {
            this.moviePage = 16;
        } else {
            this.moviePage = (this.moviePage + num) % 20;
        }

        this.moviesDisplay = this.movies.slice(
            this.moviePage,
            this.moviePage + 4
        );
    }
}
