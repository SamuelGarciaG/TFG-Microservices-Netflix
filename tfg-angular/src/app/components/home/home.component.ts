import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/films.service';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/model/series';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate(
            '.75s ease-in',
            style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  filmsArray: Film[];
  seriesArray: Series[];
  filmsTopArray: Film[];
  seriesTopArray: Series[];


  constructor(private filmService: FilmService, private seriesService: SeriesService, private router: Router) { }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "speed":1250,
    "useTransform":true,  

  };

  ngOnInit(): void {
    this.getFilms();
    this.getSeries();
  }
  
  getSeries() {
    this.seriesService.getTopSeries()
    .subscribe(series => this.seriesTopArray = series);
    this.seriesService.getSeries()
    .subscribe(series => this.seriesArray = series);
  }

  getFilms(): void {
    this.filmService.getTopFilms()
    .subscribe(films => this.filmsTopArray = films);
    this.filmService.getFilms()
    .subscribe(films => this.filmsArray = films);
  }

  goToFilm(data: Film): void{
    this.router.navigate(['/film-details', data.idfilm]);
  }

  goToSeries(data: Series): void{
    this.router.navigate(['/series-details', data.idseries]);
  }

}
