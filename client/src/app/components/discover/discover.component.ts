import { Component, OnInit } from '@angular/core';
import { TvService } from "../../services/tv.service"
import { MovieService } from "../../services/movie.service"
import { forkJoin, fromEventPattern } from "rxjs"

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  public tv: any;
  public movies: any;

  constructor(private tvService: TvService, private movieService: MovieService) { }

  ngOnInit() {
    // simulate 2 requests - TV & movie service
    forkJoin(
      this.movieService.moviesInTheathers(),
      this.tvService.discoverTV()
    )
      .subscribe(([resMovie, resTv]) => {
        this.parseTv(resTv);
        this.parseMovie(resMovie);
      });
  }

  parseTv(tv:any){
    this.tv=tv.results.slice(0,4);
    this.tv.map(tvs => tvs.poster_path = "https://image.tmdb.org/t/p/original"+tvs.poster_path)
  
    }

  parseMovie(movies:any){
    this.movies=movies.results.slice(0,4);
    this.movies.map(movie => movie.poster_path = "https://image.tmdb.org/t/p/original"+movie.poster_path)
  }



}
