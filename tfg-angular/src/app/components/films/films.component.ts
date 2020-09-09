import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/films.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsArray: Film[];
  filmsActionArray: Film[];

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
    this.filmService.getFilmsByGenre("drama")
    .subscribe(filmsA => this.filmsActionArray = filmsA)
  }


  goTo(data: Film): void{
    this.router.navigate(['/film-details', data.idfilm]);
  }

}
