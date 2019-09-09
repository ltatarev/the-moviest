import { Component, OnInit } from "@angular/core";
import { TvService } from "src/app/services/tv.service";
import { ActivatedRoute } from "@angular/router";
import { ReviewService } from "src/app/services/review.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-tv",
    templateUrl: "./tv.component.html",
    styleUrls: ["./tv.component.css"]
})
export class TvComponent implements OnInit {
    public tvId: string;
    public tv: any;

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
        private tvService: TvService,
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
        // get tvId from url
        this.tvId = this.route.snapshot.url[1].path;
        this.tv = { genres: [] };

        this.tvService.getTvById(this.tvId).subscribe(
            (res: any[]) => {
                this.tv = res;
            },
            err => console.error(err),
            () => {
                this.parseTv(this.tv);
            }
        );
    }

    parseTv(tv) {
        tv.backdrop_path =
            "https://image.tmdb.org/t/p/original" + tv.backdrop_path;
        tv.poster_path = "https://image.tmdb.org/t/p/w500" + tv.poster_path;
        return tv;
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
                movieId: this.tvId,
                movieTitle: this.tv.original_title
            }
        };
        this.reviewService.createReview(review).subscribe();
        this.reviewForm.reset();
        this.writingReview = false;
    }

    addToWatchlist() {}
}
