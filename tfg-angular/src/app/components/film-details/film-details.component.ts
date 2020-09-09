import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/films.service';
import { Film } from 'src/app/model/film';
import { Review } from 'src/app/model/review';
import { callbackify } from 'util';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;
  reviews: Review[];
  constructor(private filmService: FilmService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.filmService.getFilmById(id)
      .subscribe(films => this.film = films);
    this.call();
  }

  NewTab() { 
    window.open( 
    this.film.urltrailer);
}

  async call(){
    await this.delay(300);
    this.reviews = JSON.parse(this.film.reviews);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
