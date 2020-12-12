import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FavoriteMoviesComponent } from './favorite-movies.component';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
 

describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;
  let favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteMoviesComponent],
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
  describe('Render', () => {
    it('should show a <h1> headline with title My Favorite Movies', () => {
      const de = fixture.debugElement.query(By.css('h1'))
      expect(de.nativeElement.textContent).toContain('My Favorite Movies')
    })
    it('should show my favorite movies below the Headline', () => {
      //arrange
      component = fixture.componentInstance;
      //act
      component.favoriteMovies$ = of(favoriteTestMovies)
      fixture.detectChanges()
      //assert
      const deArray = fixture.debugElement.queryAll(By.css('li'))
      expect(deArray.length).toEqual(favoriteTestMovies.length)
      expect(deArray.map(de => de.nativeElement.textContent)).toEqual(favoriteTestMovies)
    })
    it('should show an error message , if Observable emits an error ',waitForAsync(()=>{
      //arrange
      const errorMsg = 'my 2nd error'
      const favMovService = TestBed.inject(FavoriteMoviesService)
      spyOn(favMovService,'getFavoriteMovies').and.returnValue(throwError(errorMsg))
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
