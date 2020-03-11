import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    
  } 

  getMovie(id) {
    this.movieService.getMovie(id).subscribe(data => console.log(data));
  }

}
