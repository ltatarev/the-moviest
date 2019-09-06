import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    constructor(private userService: UserService) {}

    public profileAvatar: any;
    public id: any;

    ngOnInit() {
        this.profileAvatar = this.getCoverLink();
        this.id = this.userService.user.value._id;
    }

    public getCoverLink() {
        return this.userService.user.value.avatarURL;
    }

    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    logOut() {
        return this.userService.logOut();
    }
}
