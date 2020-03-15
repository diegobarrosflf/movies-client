import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movieId;
  movie;
  genresList; 

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.movieId = routeParams.movieId;
      this.getMovie(this.movieId);
    });
  
  }

  getMovie(id) {
    this.movieService.getMovie(id).subscribe(data => {
      this.movie = data
      this.genresList = this.movie.genres;
    });
  }

  getDate(date: string){
    return date.substring(0,4);
  }

}
