import { SearchMoviesComponent } from '../search-movies/search-movies.component';
import { FavoriteMoviesService } from '../services/favorite-movies.service';
import { mocked } from 'ts-jest/utils';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FavoriteMoviesComponent } from './favorite-movies.component';
import { from, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FavoriteMovieComponent } from '../favorite-movie/favorite-movie.component';
import { MockComponent } from 'ng-mocks';

//jest.mock('./../services/favorite-movies.service') // uses the mock from the __mocks__ subdirectory

const mockGetFavoriteMovies = jest.fn().mockImplementation(()=>{
    const favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]
    return from([favoriteTestMovies]); 
  }
)
jest.mock('../services/favorite-movies.service', () => {
  return {
    FavoriteMoviesService : jest.fn().mockImplementation(() => {
       return {getFavoriteMovies: mockGetFavoriteMovies};
    })
  }
});

/* jest.mock('./../services/favorite-movies.service', () => {
  return function () {
    return {getFavoriteMovies: () => {}};
  };
}); */

describe('FavoriteMoviesComponent', () => {
  beforeEach(() => {
    (FavoriteMoviesService as any).mockClear()
  });
  let favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]
  describe('Service call 3', () => {
    it('jest should call service, and remember the movies, if favoriteMovies is not set',waitForAsync(() => {
      //arrange
      //const mockFavoriteMoviesService = mocked(FavoriteMoviesService, true);
      const favMovServ = new FavoriteMoviesService()
      
      const favoriteMoviesComponent = new FavoriteMoviesComponent(favMovServ)
      //act
      favoriteMoviesComponent.ngOnInit()
      //assert
      let actualfavoriteMovies: string[]
      favoriteMoviesComponent.favoriteMovies$
        .subscribe(movies => {
          actualfavoriteMovies = movies
          expect(actualfavoriteMovies).toEqual(favoriteTestMovies)

          expect(mockGetFavoriteMovies).toHaveBeenCalledTimes(1)
        })
    }))
   
  })

});
