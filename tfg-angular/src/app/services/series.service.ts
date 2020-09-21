import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Series } from "../model/series";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class SeriesService {
  private seriesUrl: string;

  constructor(private http: HttpClient) {
    this.seriesUrl = "http://localhost:7000/series-service/series";
  }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.seriesUrl);
  }

  getTopSeries(): Observable<Series[]> {
    const url = `${this.seriesUrl}/top`;
    return this.http.get<Series[]>(url);
  }

  getSeriesById(id: number): Observable<Series> {
    const url = `${this.seriesUrl}/${id}`;
    return this.http.get<Series>(url);
  }

  getSeriesByGenre(genre: String ): Observable<Series[]> {
    const url = `${this.seriesUrl}/genre/${genre}`;
    return this.http.get<Series[]>(url);
  }

  
}