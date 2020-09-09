import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Review } from "../model/review";

@Injectable({ providedIn: "root" })
export class ReviewsService {

  private reviewUrl: string;

  constructor(private http: HttpClient) {
    this.reviewUrl = "http://localhost:7000/review-service/review";
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl);
  }

  getSeriesByName(name: string): Observable<Review> {
    const url = `${this.reviewUrl}/${name}`;
    return this.http.get<Review>(url);
  }

  getSeriesByUser(user: string): Observable<Review> {
    const url = `${this.reviewUrl}/user/${user}`;
    return this.http.get<Review>(url);
  }


}