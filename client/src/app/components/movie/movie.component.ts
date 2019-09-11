import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { ReviewService } from "src/app/services/review.service";
import { WatchlistService } from 'src/app/services/watchlist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
    public movieId: string;
    public movie: any;

    public writingReview: boolean = false;

    public addingToWatchlist: boolean = false;

    public reviewForm: FormGroup;
    public watchlistForm: FormGroup;

    public userId: any;

    public watchlists: any;

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
        private watchlistService: WatchlistService,
        private userService: UserService,
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

        this.watchlistForm = this.fb.group({
            watchlistsArray: this.fb.array([], Validators.required)
        })

        this.userId = this.userService.user.value._id;

    }

    get watchlistsArrayForm() {
        return this.watchlistForm.get('watchlistsArray') as FormArray
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
        this.addingToWatchlist = true;
        this.watchlistService.findWatchlistsByAuthor(this.userId).subscribe(res =>{ 
            this.watchlists = res.watchlists
            this.addNewWatchlist(this.watchlists)
        })
    }

    addNewWatchlist(watchlists) {
        for (let w of watchlists){
            const watchlist = this.fb.group({
                title: [w.title]
              })
              this.watchlistsArrayForm.push(watchlist);
        }
      }

    submitWatchlist() {
        this.addingToWatchlist = false;
    }

}
