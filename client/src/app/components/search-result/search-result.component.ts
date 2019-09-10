import { Component, OnInit } from "@angular/core";
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
    selector: "app-search-result",
    templateUrl: "./search-result.component.html",
    styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit {

    private data: any;

    private displayData: any = [];
    private title: any;

    constructor(private dataProvider: DataProviderService) {
        this.data = this.dataProvider.data;

        switch (this.data.type) {
            case "reviews":
                this.parseReview(this.data.reviews);
                this.title = "Reviews for: " + this.data.reviews[0].movie.movieTitle;
                break;
            case "watchlist":
                this.parseWatchlist(this.data.watchlists);
                this.title = "Watchlists";
                break
            case "tvShow":
                this.parseTv(this.data.res.results)
                this.title = "TV shows";
                break
            case "movie":
                this.parseMovie(this.data.res.results)
                this.title = "Movies";
                break;
        }
    }

    ngOnInit() { }

    public parseReview(data) {
        for (let review of data) {
            this.displayData.push({ title: review.title, subtitle: review.rating.toString()+"/5", body: review.reviewText })
        }
        this.dataProvider.removeData();
    }

    public parseWatchlist(data) {
        for (let watchlist of data) {
            let movieTitles = JSON.stringify(watchlist.movies.map(movie => movie.movieTitle)).replace("[","").replace("]","")
            this.displayData.push({ title: watchlist.title, subtitle: watchlist.description, body: movieTitles, img: data.movies?data.movies[0].moviePosterPath:"" })
        }
        this.dataProvider.removeData();
    }

    public parseTv(data) {
        for (let tv of data) {
            if(!tv.overview || !tv.vote_average || !tv.poster_path){
                continue;
            }
            this.displayData.push({ title: tv.original_name, subtitle: tv.vote_average + "/10", body: tv.overview, img: tv.poster_path?"https://image.tmdb.org/t/p/w500/"+tv.poster_path:"" })
        }
        this.dataProvider.removeData();
    }

    public parseMovie(data) {
        for (let movie of data) {
             if(!movie.overview || !movie.vote_average || !movie.poster_path){
                continue;
            }
            this.displayData.push({ title: movie.original_title, subtitle: movie.vote_average + "/10", body: movie.overview, img: movie.poster_path?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:"" })
         }
        this.dataProvider.removeData();
    }


}
