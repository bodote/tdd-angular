import { from , Observable } from 'rxjs';
 
export class FavoriteMoviesService {
  
  constructor() { }

  getFavoriteMovies(): Observable<string[]> {
    const favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]
     return from([favoriteTestMovies]); 
  }
  deleteMovie(movie:string){
    console.log("favorite-movies.service delete the movie:" + movie)
  }
  addMovie(movie:string){
  }
}
