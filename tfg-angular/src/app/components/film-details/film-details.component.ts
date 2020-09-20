import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/films.service';
import { Film } from 'src/app/model/film';
import { Review } from 'src/app/model/review';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;
  reviews: Review[];
  form: FormGroup;

  constructor(private http: HttpClient, private filmService: FilmService, private route: ActivatedRoute, public fb: FormBuilder) {
    this.form = this.fb.group({
      review: [''],
      rating: [null]
    })
   }

   submitForm() {
    let postData = {
      'comment': this.form.get('review').value,
      'film': 1,
      'name': this.film.name,
      'rating': this.form.get('rating').value,
      'user': sessionStorage.getItem('username')
    }
    this.http.post('http://localhost:7000/review-service/review/add', postData).subscribe(
      (response: Response) => this.form.reset(),
      (error) => console.log(error))
  }

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
