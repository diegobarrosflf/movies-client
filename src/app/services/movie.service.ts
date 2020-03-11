import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { apiUrl } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(id){    
    return this.http.get<any>(`${apiUrl}/movie/${id}`);
  }

  getMovieByGenre(id){
    return this.http.get<any>(`${apiUrl}/discover/movie?with_genres=${id}`);
  }

  searchMoviesByName(string){
    return this.http.get<any>(`${apiUrl}/search/movie?query=${string}`);
  } 
}
