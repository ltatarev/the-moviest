import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
    public movieId: string;
    public movie: any;

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
        private route: ActivatedRoute
    ) {}

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
    }

    parseMovie(movie) {
        movie.backdrop_path =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
        movie.poster_path =
            "https://image.tmdb.org/t/p/original" + movie.poster_path;
        return movie;
    }
}
