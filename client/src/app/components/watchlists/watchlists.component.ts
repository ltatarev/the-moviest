import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services/watchlist.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-watchlists",
    templateUrl: "./watchlists.component.html",
    styleUrls: ["./watchlists.component.css"]
})
export class WatchlistsComponent implements OnInit {
    public id: any;
    public watchlists: any;
    public isOwner: boolean;

    public writingWatchlist: boolean = false;

    public watchlistForm: FormGroup;

    constructor(
        private userService: UserService,
        private watchlistService: WatchlistService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {
        let currentUserId = this.userService.user.value._id;

        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.isOwner = this.id === currentUserId;
            this.getWatchlists(this.id);
        });

        this.watchlistForm = this.fb.group({
            title: this.fb.control("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            description: this.fb.control("", Validators.required)
        });
    }

    ngOnInit() {}

    private getWatchlists(id) {
        return this.watchlistService
            .findWatchlistsByAuthor(id)
            .subscribe(res => {
                console.log(res);
                this.watchlists = res.watchlists;
            });
    }

    public createWatchlist() {
        this.writingWatchlist = true;
    }

    public closeWatchlist() {
        this.writingWatchlist = false;
    }

    submitWatchlist() {
        let watchlist = this.watchlistForm.value;
        this.watchlistService.createWatchlist(watchlist).subscribe();
        this.watchlistForm.reset();
        this.writingWatchlist = false;
    }
}
