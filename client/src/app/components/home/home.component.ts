import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { MovieService } from 'src/app/services/movie.service'
import { Observable, BehaviorSubject } from 'rxjs';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies:any;
  public topThree:any;
  public topFive:any;

  public tv:any;
  public topThreeTv:any;
  public topFiveTv:any;

  constructor(private movieService: MovieService, private tvService: TvService) {
   }


  ngOnInit() {
    this.movieService.weeklyTrendingMovies().subscribe((res : any[]) => {
      this.movies = res;
    },
    (err) => console.error(err),
    () => { this.parseMovies(this.movies) 
    });   

    this.tvService.weeklyTrendingTv().subscribe((res : any[]) => {
      this.tv = res;
    },
    (err) => console.error(err),
    () => { this.parseTv(this.tv) 
    });  
  }


  parseMovies(movies){
    let {results} = movies;
    this.topThree = [this.getBackdrop(results[0]),this.getBackdrop(results[1]),this.getBackdrop(results[2])];
    this.topFive =  [this.getPoster(results[3]),this.getPoster(results[4]),this.getPoster(results[5]),this.getPoster(results[6]),this.getPoster(results[7])];
  }

  getBackdrop(movie){
    movie.poster = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
    return movie;
  }

  getPoster(movie){
    movie.overview = this.getOverview(movie);
    movie.poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    return movie;
  }


  getOverview(movie){
    let re = /(.+\w+)\. /g;
    let overview = movie.overview.split(re);
    if(movie.title){
      if (movie.title.length + movie.overview.length>200){
        let diff = 200 - movie.title.length;
        movie.overview = movie.overview.substring(0, diff)+"...";
      } 
    } else if(movie.name) {
      if(movie.name.length + movie.overview.length>200){
        let diff = 200 - movie.name.length;
        movie.overview = movie.overview.substring(0, diff)+"...";
      }
      }
      return movie.overview;
    }
  

  parseTv(tv){
    let {results} = tv;
    console.log(results);
    this.topThreeTv = [this.getBackdrop(results[0]),this.getBackdrop(results[1]),this.getBackdrop(results[2])];
    this.topFiveTv =  [this.getPoster(results[3]),this.getPoster(results[4]),this.getPoster(results[5]),this.getPoster(results[6]),this.getPoster(results[7])];
  }

  goToMovie(id) {
   console.log(id)
    // this.router.navigate(['movie',response.projectId]);
  }

}
