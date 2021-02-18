import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, EMPTY, of, from  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  @Input() favoriteMovies$: Observable<string[]>
  favoriteMovies: string[] 
  errorMessage: string
  constructor(private readonly favMovService: FavoriteMoviesService) { }

  ngOnInit(): void {
    //this.favoriteMovies$ = from([["2001: A Space Odysey", "Star Wars", "Star Trek"]])
    //this.favoriteMovies$.subscribe(movies => this.favoriteMovies = movies)
    if (!this.favoriteMovies$) {
      this.favoriteMovies$ = this.favMovService.getFavoriteMovies().pipe(catchError(error => {
        this.errorMessage = error
        return EMPTY
      }))
    } 
  }
  deleteMovie(event:string){
    this.favMovService.deleteMovie(event)
  }
  addMovie(event:string){
    this.favMovService.addMovie(event)
  }

}
