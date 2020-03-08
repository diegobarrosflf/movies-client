import { Component, OnInit } from '@angular/core';
import { movies } from '../movies';

import { MovieService } from "src/app/services/movie.service";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  public movies = movies;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getMovie(550);
  }

  share() {
    window.alert('The movie has been shared!');
  }

  getMovie(id) {
    this.movieService.getMovie(id).subscribe(data => console.log(data));
  }

}
