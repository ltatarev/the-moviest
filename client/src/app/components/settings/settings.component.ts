import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
    public usernameForm: FormGroup;
    public passwordForm: FormGroup;
    public bioForm: FormGroup;
    public currWatchingForm: FormGroup;
    public favoritesForm: FormGroup;
    public avatarURL: String;

    public currentProfile$: any;

    public user: any;

    constructor(
        private userService: UserService,
        private fb: FormBuilder
    ) {
        this.getProfileData();
        // * F O R M S
        // * username
        this.usernameForm = this.fb.group({
            username: this.fb.control("", [
                Validators.required,
                Validators.maxLength(15),
                Validators.minLength(3)
            ])
        });

        // * password
        this.passwordForm = this.fb.group({
            password: this.fb.control("", [
                Validators.required,
                Validators.minLength(3)
            ])
        });

        // * bio
        this.bioForm = this.fb.group({
            bio: this.fb.control("", [
                Validators.required,
                Validators.maxLength(15)
            ])
        });

        // * currently watching
        this.currWatchingForm = this.fb.group({
            currentlyWatching: this.fb.control("", [
                Validators.required,
                Validators.maxLength(15)
            ])
        });

        // * favorites
        this.favoritesForm = this.fb.group({
            movie: this.fb.control("", [Validators.maxLength(15)]),
            tvShow: this.fb.control("", [Validators.maxLength(15)]),
            actor: this.fb.control("", [Validators.maxLength(15)]),
            genre: this.fb.control("", [Validators.maxLength(15)])
        });
    }

    ngOnInit() { }

    getProfileData() {
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(
                res => {
                    this.currentProfile$ = res;
                },
                err => console.error(err),
                () => this.fillFormInitialValues(this.currentProfile$)
            );
    }

    fillFormInitialValues(res) {
        this.user = res.user;
        this.avatarURL = this.user.avatarURL;
        // * Fill forms initial value with existing values from DB
        this.usernameForm.controls["username"].setValue(this.user.username);
        this.bioForm.controls["bio"].setValue(this.user.bio);
        this.currWatchingForm.controls["currentlyWatching"].setValue(
            this.user.currentlyWatching
        );
        this.favoritesForm.controls["movie"].setValue(
            this.user.favorites.movie
        );
        this.favoritesForm.controls["tvShow"].setValue(
            this.user.favorites.tvShow
        );
        this.favoritesForm.controls["actor"].setValue(
            this.user.favorites.actor
        );
        this.favoritesForm.controls["genre"].setValue(
            this.user.favorites.genre
        );
    }

    // * Submit functions
    updateUsername() {
        let value: any = this.usernameForm.value.username;
        this.userService.updateUsername(value).subscribe();
    }

    updatePassword() {
        let value: any = this.passwordForm.value.password;
        this.userService.updatePassword(value).subscribe();
        this.passwordForm.reset();
    }

    updateBio() {
        let value: any = this.bioForm.value.bio;
        this.userService.updateBio(value).subscribe();
    }

    updateCurrentlyWatching() {
        let value: any = this.currWatchingForm.value.currentlyWatching;
        this.userService.updateCurrentlyWatching(value).subscribe();
    }

    updateFavorites() {
        let favorites = this.favoritesForm.value;
        this.userService.updateFavorites(favorites).subscribe();
    }

    updateAvatar(id) {
        let avatarURL = "../../../assets/img/avatars/" + id + ".png";
        this.userService.updateAvatar(avatarURL).subscribe((res: any) => {
            this.avatarURL = res.user.avatarURL;
        },
            err => console.error(err));
    }


    shuffleAvatar() {
        // function assigns new avatar id, different than current one
        let currentId = parseInt(this.avatarURL.split("/")[6].split(".")[0]);
        let newId = this.randomInt();
        if (newId === currentId) {
            this.shuffleAvatar();
        } else {
            let id = newId < 10 ? "0" + newId.toString() : newId.toString();
            this.updateAvatar(id);
        }
    }

    randomInt() {
        // random Int between 1 and 34 (number of current avatars)
        return Math.floor(Math.random() * 34) + 1;
    }
}
