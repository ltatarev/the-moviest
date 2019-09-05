import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";

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

    // activated route (?) (or token)
    constructor(
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder
    ) {
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

        // usernameForm -- updateUsername
        // passwordForm -- updatePassword
        // bioForm -- updateBio
        // currWatchingForm -- updateCurrentlyWatching
        // favoritesForm -- updateFavorites
        // -- updateMovie
        // -- updateTvShow
        // -- updateActor
        // -- updateGenre
    }

    ngOnInit() {
        // http get current profile data, display where needed
    }

    shuffleAvatar(currentId) {
        // currentId = avatarUrl.split("/") - last
        // function assigns new avatar id, different than current one
        let newId = this.randomInt();
        if (newId === currentId) {
            this.shuffleAvatar(currentId);
        } else {
            return newId < 10 ? "0" + newId.toString() : newId.toString();
        }
    }

    randomInt() {
        // random Int between 1 and 34 (number of current avatars)
        return Math.floor(Math.random() * 34) + 1;
    }
}
