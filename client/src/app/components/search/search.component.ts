import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { MovieService } from "../../services/movie.service";
import { TvService } from "../../services/tv.service";
import { UserService } from "src/app/services/user.service";
import { ReviewService } from "src/app/services/review.service";
import { WatchlistService } from "src/app/services/watchlist.service";
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Router } from '@angular/router';

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
    private searchForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private movieService: MovieService,
        private tvService: TvService,
        private userService: UserService,
        private reviewService: ReviewService,
        private watchlistService: WatchlistService,
        private dataProviderService: DataProviderService,
        private router: Router
    ) {
        this.searchForm = this.fb.group({
            search: this.fb.control([], Validators.required),
            type: this.fb.control([], Validators.required)
        });
    }

    ngOnInit() { }

    onSubmit() {
        let value: any = this.searchForm.value;

        switch (value.type) {
            case "watchlist":
                this.watchlistService
                    .findWatchlistsByName(value.search)
                    .subscribe(res => {
                            this.dataProviderService.setData({watchlists:res.watchlists,type:"watchlist"});
                        }
                    );
                break;
            case "review":
                this.reviewService.findReviewByMovie(value.search).subscribe(res => {
                        this.dataProviderService.setData({reviews:res.reviews,type:"reviews"});
                    }
                );
                break;
            case "profile":
                this.userService.findUserByUsername(value.search).subscribe();
                break;
            case "tvShow":
                this.tvService.searchByName(value.search).subscribe(res => {
                    this.dataProviderService.setData({res, type:"tvShow"});
                    this.router.navigate(["searchResult"]);
                });
                break;
            case "movie":
                this.movieService.searchByName(value.search).subscribe(res => {
                    this.dataProviderService.setData({res, type:"movie"});
                    this.router.navigate(["searchResult"]);
                });
                break;
        }
    }
}
