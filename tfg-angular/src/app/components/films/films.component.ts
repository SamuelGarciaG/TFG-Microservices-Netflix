import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/films.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
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
export class FilmsComponent implements OnInit {

  filmsArray: Film[];
  filmsActionArray: Film[];
  filmsDramaArray: Film[];
  filmsAdventureArray: Film[];
  filmsCrimeArray: Film[];
  filmsMysteryArray: Film[];
  constructor(private filmService: FilmService, private router: Router) { }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "speed":1250,
    "useTransform":true
  };

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms()
    .subscribe(films => this.filmsArray = films);
    this.filmService.getFilmsByGenre("action")
    .subscribe(films => this.filmsActionArray = films)
    this.filmService.getFilmsByGenre("drama")
    .subscribe(films => this.filmsDramaArray = films)
    this.filmService.getFilmsByGenre("adventure")
    .subscribe(films => this.filmsAdventureArray = films)
    this.filmService.getFilmsByGenre("crime")
    .subscribe(films => this.filmsCrimeArray = films)
    this.filmService.getFilmsByGenre("mystery")
    .subscribe(films => this.filmsMysteryArray = films)
  }


  goTo(data: Film): void{
    this.router.navigate(['/film-details', data.idfilm]);
  }

}
