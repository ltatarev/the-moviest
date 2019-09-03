import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    // router, formBuilder, userService, activated route (?) (or token)
  constructor() { }

  ngOnInit() {
      // http get current profile data, display where needed
      
  }

    shuffleAvatar(currentId){
    // function assigns new avatar id, different than current one
    let newId = this.randomInt();
        if (newId===currentId){
        shuffleAvatar(currentId)
        }
        else {
            return newId < 10 ? "0"+newId.toString() : newId.toString();
        }
    }
    
    randomInt(){
        // random Int between 1 and 34 (number of current avatars)
        return Math.floor(Math.random() * (34)) + 1;
    }
    
    
}
