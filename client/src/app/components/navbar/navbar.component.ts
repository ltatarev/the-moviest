import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  public profileAvatar:any;

  ngOnInit() {
    this.profileAvatar = this.getCoverLink();
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
