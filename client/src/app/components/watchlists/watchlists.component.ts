import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services/watchlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataProviderService } from "src/app/services/data-provider.service";
import { ToastrService, Toast } from "ngx-toastr";

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

    public isEmpty: boolean = true;

    public sort: any = 1;

    constructor(
        private userService: UserService,
        private watchlistService: WatchlistService,
        private activatedRoute: ActivatedRoute,
        private dataProvider: DataProviderService,
        private router: Router,
        private fb: FormBuilder,
        private toastrService: ToastrService
    ) {
        this.dataProvider.removeData();

        let currentUserId = this.userService.user.value._id;

        // * check if you need fetch all or just specific users' watchlists
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                this.isOwner = this.id === currentUserId;
                this.getWatchlists(this.id);
            } else {
                this.getAllWatchlists();
            }
        });

        // * create new watchlist form
        this.watchlistForm = this.fb.group({
            title: this.fb.control("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            description: this.fb.control("", Validators.required)
        });
    }

    ngOnInit() { }

    // * get all watchlists from a specific user
    private getWatchlists(id: any) {
        return this.watchlistService
            .findWatchlistsByAuthor(id, 0)
            .subscribe(res => {
                this.watchlists = res.watchlists;
                this.isEmpty = !this.watchlists.length;
            });
    }

    // * get all watchlists
    private getAllWatchlists() {
        return this.watchlistService.findAllWatchlists(0).subscribe(res => {
            this.watchlists = res.watchlists;
            this.isEmpty = !this.watchlists.length;
        });
    }

    // * opened "create new watchlist" modal
    public createWatchlist() {
        this.writingWatchlist = true;
    }

    // * closed "create new watchlist" modal
    public closeWatchlist() {
        this.writingWatchlist = false;
    }

    // * form submit
    submitWatchlist() {
        let watchlist = this.watchlistForm.value;
        this.watchlistService.createWatchlist(watchlist).subscribe();
        this.watchlistForm.reset();
        this.writingWatchlist = false;
        this.toastrService.info(
            "Add movies to your new watchlist!",
            "Discover",
            {
                timeOut: 5000,
                positionClass: "toast-center-center",
                tapToDismiss: true
            }
        );
        this.router.navigate(["discover"]);
    }

    // * open watchlist details
    public openWatchlist(watchlist) {
        this.dataProvider.setData({ watchlist, type: "watchlist" });
        this.router.navigate(["details"]);
    }

    sortByTitle() {
        if (this.id) {
            this.watchlistService
                .sortByTitle(this.id, this.sort)
                .subscribe(res => {
                    this.watchlists = res.watchlists;
                    window.scroll(0, 0);
                });
        } else {
            this.watchlistService
                .sortByTitle(0, this.sort)
                .subscribe(res => {
                    this.watchlists = res.watchlists;
                    window.scroll(0, 0);
                });
        };
        this.sort = -this.sort;
    }
}
