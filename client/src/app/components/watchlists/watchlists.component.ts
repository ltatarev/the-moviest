import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services/watchlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataProviderService } from "src/app/services/data-provider.service";

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
        private dataProvider: DataProviderService,
        private router: Router,
        private fb: FormBuilder
    ) {
        let currentUserId = this.userService.user.value._id;

        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                this.isOwner = this.id === currentUserId;
                this.getWatchlists(this.id);
            } else {
                this.getAllWatchlists();
            }
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

    private getWatchlists(id: any) {
        return this.watchlistService
            .findWatchlistsByAuthor(id)
            .subscribe(res => {
                this.watchlists = res.watchlists;
            });
    }

    private getAllWatchlists() {
        return this.watchlistService.findAllWatchlists().subscribe(res => {
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
        this.router.navigate(["discover"]);

        // TODO: fetch watchlists after submitting
        /*         if (this.id) {
            this.getWatchlists(this.id);
        } else this.getAllWatchlists(); */
    }

    // todo: sort by date created and title

    private openWatchlist(watchlist) {
        this.dataProvider.setData({ watchlist, type: "watchlist" });
        this.router.navigate(["details"]);
    }
}
