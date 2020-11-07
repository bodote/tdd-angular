import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  @Input() favoriteMovies$: Observable<string[]> 
  error: string 
  constructor(private favMoService : FavoriteMoviesService) { }
  ngOnInit(): void {
    if (this.favoriteMovies$ === undefined){// because if the favoriteMovies$ is already set via '@Input()' we don't want to overwrite it
      this.favoriteMovies$ = this.favMoService.getFavoriteMovies().pipe(
        catchError(err => {
          this.error='error occured'
          return from([['an error has occured']])
        })
      );
    }
  }
}
