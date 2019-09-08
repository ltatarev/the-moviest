import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { MovieService } from "../../services/movie.service"
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService:MovieService, private tvService:TvService) {
    this.searchForm = this.fb.group({
      search: this.fb.control([], Validators.required),
      type: this.fb.control([], Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let value: any = this.searchForm.value;

    switch (value.type) {
      case "watchlist":
        console.log(1)
        break;
      case "review":
          console.log(1)
        break;
      case "profile":
          console.log(1)
        break;
      case "tvShow":
        this.tvService.searchByName(value.search).subscribe(res => console.log(res))
        break;
      case "movie":
        this.movieService.searchByName(value.search).subscribe(res => console.log(res))
        break;

    }


 
  }

}
