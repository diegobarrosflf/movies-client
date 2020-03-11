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

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('movieId')
    });
    this.getMovie(this.movieId);
  }

  getMovie(id) {
    this.movieService.getMovie(id).subscribe(data => {
      
      this.movie = data
      console.log('data: ', data)
      
    }
      );
  }



}
