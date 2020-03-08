import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {

  }

  listGenres() {
    return this.http.get<any>(`${apiUrl}/genre/movie/list`);
  }
}
