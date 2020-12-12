import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  @Input() favoriteMovies$: Observable<string[]>
  errorMessage: string
  constructor(private readonly favMovService: FavoriteMoviesService) { }

  ngOnInit(): void {
    if (!this.favoriteMovies$) {
      this.favoriteMovies$ = this.favMovService.getFavoriteMovies().pipe(catchError(error => {
        this.errorMessage = error
        return EMPTY
      }))
    } 
  }

}
