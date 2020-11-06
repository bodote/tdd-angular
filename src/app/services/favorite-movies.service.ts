import { Injectable } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor() { }
  getFavoriteMovies(): Observable<string[]> {
    return EMPTY
  }
}
