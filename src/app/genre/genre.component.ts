import { Component, OnInit } from '@angular/core';
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
  movieList: Array<any> = [];

  constructor(private route: ActivatedRoute, 
    private movieService: MovieService) {   

  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      console.log("parametros: ", routeParams);
      this.id = routeParams.id;
      this.name = routeParams.name;
      this.getMoviesByGenre(this.id);
    });


    
  }

  getMoviesByGenre(id){
    console.log("id movies: ", id)
    this.movieService.getMovieByGenre(id).subscribe(data =>{
      console.log(data);      
      this.movieList = data.results;
    })
      
  }

  

}
