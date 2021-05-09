import { SearchMoviesComponent } from './../search-movies/search-movies.component';
import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { mocked } from 'ts-jest/utils';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FavoriteMoviesComponent } from './favorite-movies.component';
import { from, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FavoriteMovieComponent } from '../favorite-movie/favorite-movie.component';
import { MockComponent } from 'ng-mocks';

jest.mock('./../services/favorite-movies.service', () => {
  return {
    FavoriteMoviesService:jest.fn().mockImplementation(() => {
      return {
        getFavoriteMovies: () => {
          const favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]
          return from([favoriteTestMovies]).pipe(delay(100)); 
        },
      };
    })
  };
}); 


describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;
  let favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]
 
  beforeEach(async () => {
 
  });

  beforeEach(() => {
    
  });

  describe('Service call 2', () => {

    it('jest should call service, and remember the movies, if favoriteMovies is not set',(done) => {
      //arrange
      const mockFavoriteMoviesService = mocked(FavoriteMoviesService, true);
      const favoriteMoviesComponent = new FavoriteMoviesComponent(new FavoriteMoviesService())
      //act
      favoriteMoviesComponent.ngOnInit()
      //assert
      let actualfavoriteMovies: string[]
      favoriteMoviesComponent.favoriteMovies$
        .subscribe(movies => {
          actualfavoriteMovies = movies
          expect(actualfavoriteMovies).toEqual(favoriteTestMovies)
          done()
        })
    })
    it('jest should call service, and remember the movies, if favoriteMovies is not set',waitForAsync(() => {
      //arrange
      const mockFavoriteMoviesService = mocked(FavoriteMoviesService, true);
      const favoriteMoviesComponent = new FavoriteMoviesComponent(new FavoriteMoviesService())
      //act
      favoriteMoviesComponent.ngOnInit()
      //assert
      let actualfavoriteMovies: string[]
      favoriteMoviesComponent.favoriteMovies$
        .subscribe(movies => {
          actualfavoriteMovies = movies
          expect(actualfavoriteMovies).toEqual(favoriteTestMovies)
          
        })
    }))
   
  })

});
