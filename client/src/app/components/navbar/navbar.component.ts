import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    constructor(private userService: UserService) {}

    public avatarURL: Observable<any>;
    public id: any;

    ngOnInit() {
        this.getProfileData();
        this.id = this.userService.user.value._id;
    }

    public getCoverLink() {
        return this.userService.user.value.avatarURL;
    }

    getProfileData() {
        this.userService
            .getProfileData(this.userService.user.value._id)
            .subscribe(
                res => {
                    this.avatarURL = res.user.avatarURL;
                },
                err => console.error(err)
            );
    }

    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    logOut() {
        return this.userService.logOut();
    }
}
