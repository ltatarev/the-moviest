import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReviewService } from "src/app/services/review.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
    public movieId: string;
    public movie: any;

    public writingReview: boolean = false;

    public reviewForm: FormGroup;

    protected genreEmojis = {
        Action: "🚗",
        Adventure: "🗺️",
        "Action & Adventure": "🗺️",
        Animation: "🤖",
        Comedy: "😂",
        Crime: "🦹",
        Documentary: "👨‍💼",
        Drama: "🎭",
        Family: "👪",
        Fantasy: "🧝",
        History: "🏛️",
        Horror: "🧟",
        Kids: "🕹️",
        Music: "🎶",
        Mystery: "🕵️",
        Romance: "💞",
        "Sci-Fi & Fantasy": "🧝",
        "Science Fiction": "🦸",
        "TV Movie": "🎥",
        Thriller: "🔪",
        War: "⚔️",
        "War & Politics": "⚔️",
        Western: "🤠"
    };

    constructor(
        private movieService: MovieService,
        private reviewService: ReviewService,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.reviewForm = this.fb.group({
            title: this.fb.control("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            rating: this.fb.control("", [
                Validators.required,
                Validators.min(1),
                Validators.max(5)
            ]),
            reviewText: this.fb.control("")
        });
    }

    ngOnInit() {
        // get movieId from url
        this.movieId = this.route.snapshot.url[1].path;
        this.movie = { genres: [] };

        this.movieService.getMovieById(this.movieId).subscribe(
            (res: any[]) => {
                this.movie = res;
            },
            err => console.error(err),
            () => {
                this.parseMovie(this.movie);
            }
        );
        this.reviewForm.reset;
        this.writingReview = false;
    }

    parseMovie(movie) {
        movie.backdrop_path =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
        movie.poster_path =
            "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        return movie;
    }

    writeReview() {
        this.writingReview = true;
    }

    closeReview() {
        this.writingReview = false;
    }

    submitReview() {
        let review = {
            ...this.reviewForm.value,
            movie: {
                movieId: this.movieId,
                movieTitle: this.movie.original_title
            }
        };
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    }

    addToWatchlist() {
        // TODO: router navigate to profile with user id ?? OR open div with users watchlists as a form ?
        // * save movie id, title, poster path to local storage ??
    }
}
