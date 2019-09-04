import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:Observable<User>;
  public profileAvatar:String;
  public currentlyWatching:any;
  public username:String;
  public bio:String;
  public favMovie:String;
  public favShow:String;
  public favActor:String;
  public favGenre:String;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getProfileData().subscribe((res : any) => {
      this.user = res.user;
    },
    (err) => console.error(err));   
  }  

  private getProfileData() {
    return this.userService.getProfileData(this.userService.user.value._id);
   }

}
