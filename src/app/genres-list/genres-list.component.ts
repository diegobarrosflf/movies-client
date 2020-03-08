import { Component, OnInit } from '@angular/core';
import { GenresService } from "src/app/services/genres.service";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.sass']
})
export class GenresListComponent implements OnInit {

  genres: any;

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.genresService.listGenres().subscribe(data => {
      console.log(data.genres);
      this.genres = data.genres;
    })
  }
}
