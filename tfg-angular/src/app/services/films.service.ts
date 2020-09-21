import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Film } from "../model/film";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class FilmService {
  private filmsUrl: string;

  constructor(private http: HttpClient) {
    this.filmsUrl = "http://localhost:7000/films-service/films";
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }

  getTopFilms(): Observable<Film[]> {
    const url = `${this.filmsUrl}/top`;
    return this.http.get<Film[]>(url);
  }

  getFilmById(id: number): Observable<Film> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  getFilmsByGenre(genre: String ): Observable<Film[]> {
    const url = `${this.filmsUrl}/genre/${genre}`;
    return this.http.get<Film[]>(url);
  }

}
