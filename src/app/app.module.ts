import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteMoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
