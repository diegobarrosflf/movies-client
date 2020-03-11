import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  @Input() movieList;
  movie;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    //this.getPopularMovies();
    
    
  } 

  getMovie(id) {
    this.movieService.getMovie(id).subscribe(data => console.log(data));
  }

  getPopularMovies(){
    this.movieService.getPopularMovies().subscribe(
      data => {
        this.movieList = data.results;
      }
    )
  }

  getUpComingMovies(){
    this.movieService.getUpComingMovies().subscribe(
      data => {
        this.movieList = data.results;
      }
    )
  }

  getNowPlaying(){
    this.movieService.getUpComingMovies().subscribe(
      data => {
        this.movieList = data.results;
      }
    )
  }

}
