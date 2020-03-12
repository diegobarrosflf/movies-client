import { Component, OnInit, EventEmitter } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {

  pages: any;
  public movies: Array<any> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMoviesByName(name) {
    if(name) {
      this.movieService.searchMoviesByName(name).subscribe(data => {
        this.movies = data.results;
        this.pages = data.total_pages;
      })
    } else {
      this.movies = [];
    }
  }
}
