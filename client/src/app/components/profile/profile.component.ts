import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";
import { User } from "src/app/classes/user";
import { ReviewService } from "../../services/review.service";
import { WatchlistService } from "../../services/watchlist.service";
import { Router } from "@angular/router";

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
    public userId: any;

    constructor(private userService: UserService, private router: Router) {
        this.userId = this.userService.user.value._id;
    }

    ngOnInit() {
        this.favorites = { movie: "", tvShow: "", actor: "", genre: "" };
        this.getProfileData().subscribe(
            (res: any) => {
                this.user = res.user;
            },
            err => console.error(err),
            () => {
                this.fillProfile(this.user);
            }
        );
    }

    private fillProfile(user) {
        this.username = user.username;
        this.bio = user.bio;
        this.avatarURL = user.avatarURL;
        this.currentlyWatching = user.currentlyWatching;
        this.favorites = user.favorites;
    }

    private getProfileData() {
        return this.userService.getProfileData(this.userId);
    }

    public getWatchlists() {
        this.router.navigate(["watchlist", this.userId]);
    }

    public getReviews() {
        this.router.navigate(["review", this.userId]);
    }
}
