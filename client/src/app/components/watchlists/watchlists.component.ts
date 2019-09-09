import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services/watchlist.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-watchlists",
    templateUrl: "./watchlists.component.html",
    styleUrls: ["./watchlists.component.css"]
})
export class WatchlistsComponent implements OnInit {
    public id: any;
    public watchlists: any;
    public isOwner: boolean;

    constructor(
        private userService: UserService,
        private watchlistService: WatchlistService,
        private activatedRoute: ActivatedRoute
    ) {
        let currentUserId = this.userService.user.value._id;

        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.isOwner = this.id === currentUserId;
            this.getWatchlists(this.id);
        });
    }

    ngOnInit() {}

    private getWatchlists(id) {
        return this.watchlistService
            .findWatchlistsByAuthor(id)
            .subscribe(res => {
                console.log(res.message);
                this.watchlists = res.watchlists;
            });
    }
}
