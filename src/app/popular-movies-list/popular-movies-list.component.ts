import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-popular-movies-list',
  templateUrl: './popular-movies-list.component.html',
  styleUrls: ['./popular-movies-list.component.sass']
})
export class PopularMoviesListComponent implements OnInit {

  popularMovies;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {

    this.getPopularMovies();
  }

  getPopularMovies(){
    this.movieService.getPopularMovies().subscribe(
      data => {
        this.popularMovies = data.results
      }
    )
  }

}
