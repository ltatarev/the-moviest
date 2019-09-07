import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  public tvId: string;
  public tv: any;


  constructor(private tvService: TvService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get tvId from url
    this.tvId = this.route.snapshot.url[1].path;
    this.tv = { genres: [] };

    this.tvService.getTvById(this.tvId).subscribe((res: any[]) => {
      this.tv = res;
    },
      (err) => console.error(err),
      () => {
        this.parseTv(this.tv);
      });

  }

  parseTv(tv) {
    tv.backdrop_path = 'https://image.tmdb.org/t/p/original' + tv.backdrop_path;
    tv.poster_path = 'https://image.tmdb.org/t/p/original' + tv.poster_path
    return tv;
  }

}
