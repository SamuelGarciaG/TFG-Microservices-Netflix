import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Object } from "../model/object";

@Injectable({ providedIn: "root" })
export class SearchService {

  private searchUrl: string;

  constructor(private http: HttpClient) {
    this.searchUrl = "http://localhost:7000/search-service/";
  }

  getSearchFiltered(data: String): Observable<Object[]> {
    const url = `${this.searchUrl}${data}`;
    return this.http.get<Object[]>(url);
  }

}