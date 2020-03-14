import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './interceptors';
import { GenresListComponent } from './genres-list/genres-list.component';
import { GenreComponent } from './genre/genre.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularMoviesListComponent } from './popular-movies-list/popular-movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TopBarComponent,
    GenresListComponent,
    GenreComponent,
    routingComponents,
    SearchComponent,
    MovieDetailComponent,
    PopularMoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PopularMoviesListComponent},
      { path: 'home', component: PopularMoviesListComponent},
      { path: 'genre/:id/:name', component: GenreComponent},
      { path: 'movie/:movieId', component: MovieDetailComponent},
      { path: 'search/movie', component: MovieListComponent}

    ])
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
