import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: "genre/:id/:name", component: GenreComponent },
  {path: "search", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  GenreComponent,
  SearchComponent
];