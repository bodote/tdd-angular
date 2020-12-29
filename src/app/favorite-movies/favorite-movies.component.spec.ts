import { SearchMoviesComponent } from './../search-movies/search-movies.component';
import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FavoriteMoviesComponent } from './favorite-movies.component';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FavoriteMovieComponent } from '../favorite-movie/favorite-movie.component';
import { MockComponent } from 'ng-mocks';


describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;
  let favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteMoviesComponent, MockComponent(FavoriteMovieComponent), MockComponent(SearchMoviesComponent)],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMoviesComponent)
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  describe('should react to events and ...', () => {
    it('should call the deleteMovie method of the service, if it gets an delete event ', () => {
      //arrange
      const service = TestBed.inject(FavoriteMoviesService)
      const serviceSpy = spyOn(service, 'deleteMovie')
      component = fixture.componentInstance;
      component.favoriteMovies$ = of(favoriteTestMovies)
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.directive(FavoriteMovieComponent))
      const favMovComp = de.componentInstance as FavoriteMovieComponent
      //act
      favMovComp.deleteMovie.emit(favoriteTestMovies[1])
      //assert
      expect(serviceSpy).toHaveBeenCalledWith(favoriteTestMovies[1])
    })
    it('should call the add movie method in service, if it gets an add movie event',()=>{
      //arrange
      const movieToBeAdded = "The Manalorian"
      const service = TestBed.inject(FavoriteMoviesService)
      const serviceSpy = spyOn(service, 'addMovie')
      component = fixture.componentInstance;
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.directive(SearchMoviesComponent))
      const searchMovieComp = de.componentInstance as SearchMoviesComponent
      //act
      searchMovieComp.movieToAdd.emit(movieToBeAdded)
      //assert
      expect(serviceSpy).toHaveBeenCalledWith(movieToBeAdded)
    })
  })
  describe('Render', () => {
    it('should show a <h1> headline with title My Favorite Movies', () => {
      const de = fixture.debugElement.query(By.css('h1'))
      expect(de.nativeElement.textContent).toContain('My Favorite Movies')
    })
    it('should show the search-movie below the headline', () => {
      //arrange
      component = fixture.componentInstance;
      //act
      fixture.detectChanges()
      //assert
      const de = fixture.debugElement.query(By.directive(SearchMoviesComponent))
      expect(de.componentInstance).toBeDefined()
    })
    it('should show my favorite movies below the search-movie', () => {
      //arrange
      component = fixture.componentInstance;
      //act
      component.favoriteMovies$ = of(favoriteTestMovies)
      fixture.detectChanges()
      //assert
      const deArray = fixture.debugElement.queryAll(By.directive(FavoriteMovieComponent))
      expect(deArray.length).toEqual(favoriteTestMovies.length)
      expect(deArray.map(de => (de.componentInstance as FavoriteMovieComponent).movieName)).toEqual(favoriteTestMovies)
    })
    it('should show an error message , if Observable emits an error ', waitForAsync(() => {
      //arrange
      const errorMsg = 'my 2nd error'
      const favMovService = TestBed.inject(FavoriteMoviesService)
      spyOn(favMovService, 'getFavoriteMovies').and.returnValue(throwError(errorMsg))
      //act
      fixture.detectChanges()
      //assert
      const de = fixture.debugElement.query(By.css('.error'))
      expect(de.nativeElement.textContent).toContain(errorMsg)
    }))
  })
  describe('Service call', () => {
    it('should call service, and remember the movies, if favoriteMovies is not set', waitForAsync(() => {
      //arrange
      const favoriteMoviesService = new FavoriteMoviesService()
      const favoriteMoviesComponent = new FavoriteMoviesComponent(favoriteMoviesService)
      const favMovServSpy = spyOn(favoriteMoviesService, 'getFavoriteMovies')
        .and.returnValue(of(favoriteTestMovies).pipe(delay(100)))
      //act
      favoriteMoviesComponent.ngOnInit()
      //assert
      expect(favMovServSpy).toHaveBeenCalled()
      let actualfavoriteMovies: string[]
      favoriteMoviesComponent.favoriteMovies$
        .subscribe(movies => {
          actualfavoriteMovies = movies
          expect(actualfavoriteMovies).toEqual(favoriteTestMovies)
        })
    }))
    it('should NOT call service if favoriteMovies is already set', () => {
      //arrange
      const favoriteMoviesService = new FavoriteMoviesService()
      const favoriteMoviesComponent = new FavoriteMoviesComponent(favoriteMoviesService)
      const favMovServSpy = spyOn(favoriteMoviesService, 'getFavoriteMovies')
      //act
      favoriteMoviesComponent.favoriteMovies$ = of(favoriteTestMovies)
      favoriteMoviesComponent.ngOnInit()
      //assert
      expect(favMovServSpy).not.toHaveBeenCalled()
    })
  })

});
