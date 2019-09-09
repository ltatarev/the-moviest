import { Component, OnInit } from "@angular/core";
import { TvService } from "src/app/services/tv.service";
import { ActivatedRoute } from "@angular/router";
import { ReviewService } from "src/app/services/review.service";

@Component({
    selector: "app-tv",
    templateUrl: "./tv.component.html",
    styleUrls: ["./tv.component.css"]
})
export class TvComponent implements OnInit {
    public tvId: string;
    public tv: any;

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
        private route: ActivatedRoute
    ) {}

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

    writeReview() {}

    addToWatchlist() {}
}
