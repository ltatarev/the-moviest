import { Component, OnInit } from '@angular/core';
// import tv & movie service

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  public tv: any;
  public movie: any;
    //private tvService: TvService, private movieService:MovieService
  constructor() { }

  ngOnInit() {
     // simulate 2 requests - TV & movie service
/*     forkJoin(
      this.tvService.discoverTV(),
      this.movieService.moviesInTheathers()
    )
    .subscribe(([res1, res2]) => {
      this.tv = res1;
      this.movie = res2;
    });     */
  }
    
    

}
