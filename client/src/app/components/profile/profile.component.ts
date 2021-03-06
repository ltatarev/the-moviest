import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";
import { User } from "src/app/classes/user";
import { ReviewService } from "../../services/review.service";
import { WatchlistService } from "../../services/watchlist.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    public user: any;
    public username: any;
    public bio: any;
    public avatarURL: any;
    public currentlyWatching: any;
    public favorites: any;

    // userId is currently logged in user
    public userId: any;
    // id is user id (got through search or idk)
    public id: any;

    constructor(
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.userId = this.userService.user.value._id;
    }

    ngOnInit() {
        this.favorites = { movie: "", tvShow: "", actor: "", genre: "" };

        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.getProfileData(params.id).subscribe(
                    (res: any) => {
                        this.user = res.user;
                        this.id = params.id;
                    },
                    err => console.error(err),
                    () => {
                        this.fillProfile(this.user);
                    }
                );
            } else {
                this.getProfileData(this.userId).subscribe(
                    (res: any) => {
                        this.user = res.user;
                    },
                    err => console.error(err),
                    () => {
                        this.fillProfile(this.user);
                    }
                );
            }
        });
    }

    public fillProfile(user) {
        this.username = user.username;
        this.bio = user.bio;
        this.avatarURL = user.avatarURL;
        this.currentlyWatching = user.currentlyWatching;
        this.favorites = user.favorites;
    }

    public getProfileData(id) {
        return this.userService.getProfileData(id);
    }

    public getWatchlists() {
        this.router.navigate(["watchlists", this.id]);
    }

    public getReviews() {
        this.router.navigate(["reviews", this.id]);
    }
}
