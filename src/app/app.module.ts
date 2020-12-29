import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { FavoriteMovieComponent } from './favorite-movie/favorite-movie.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteMoviesComponent,
    FavoriteMovieComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
