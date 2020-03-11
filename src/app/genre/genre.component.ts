import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.sass']
})
export class GenreComponent implements OnInit {

  id: any;
  name: string;
  @Output() movieList: Array<any> = [];

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.id = routeParams.id;
      this.name = routeParams.name;
      this.getMoviesByGenre(this.id);
    });
  }

  getMoviesByGenre(id) {
    this.movieService.getMovieByGenre(id).subscribe(data => {
      this.movieList = data.results;
    })

  }



}
