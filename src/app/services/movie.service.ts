import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from '@angular/core';
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

  searchMoviesByName(term: string){
    return this.http.get<any>(`${apiUrl}/search/movie?query=${term}`);
  }

  getPopularMovies(){
    return this.http.get<any>(`${apiUrl}/movie/popular`);
  }

  getUpComingMovies(){
    return this.http.get<any>(`${apiUrl}/movie/upcoming?language=en-US`);
  }

  getNowPlayingMovies(){
    return this.http.get<any>(`${apiUrl}/movie/now_playing?language=en-US`);
  }
  
  
}
