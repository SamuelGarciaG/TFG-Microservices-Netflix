import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/films.service';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.filmService.getFilmById(id)
      .subscribe(films => this.film = films);
  }

  NewTab() { 
    window.open( 
      "https://www.youtube.com/");
}

}
