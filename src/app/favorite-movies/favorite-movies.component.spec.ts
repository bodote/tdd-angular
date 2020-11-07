import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { from, EMPTY, Observable, throwError } from 'rxjs';
import { FavoriteMoviesService } from '../services/favorite-movies.service';

import { FavoriteMoviesComponent } from './favorite-movies.component';

describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteMoviesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMoviesComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  describe('Render', () => {
    it('should have a title', () => {
      fixture.detectChanges();
      let de = fixture.debugElement.queryAll(By.css('h1'))
      expect(de.length).toBe(1)
      expect(de[0].nativeElement.textContent).toContain('My Favorite Movies')
    })
    it('should show the movies', ()=> {
      component.favoriteMovies$ = from([["Return of the Jedis", "A Space Odyssey", "The Terminator"]])
      fixture.detectChanges()
        let de = fixture.debugElement.queryAll(By.css('.movie'))
        expect(de.length).toBe(3)
        expect(de[0].nativeElement.textContent).toContain('Return of the Jedis')
        expect(de[2].nativeElement.textContent).toContain('The Terminator')
    })
    it('should call service to get the movies', () => {
      let favoriteMoviesService = TestBed.inject(FavoriteMoviesService)
      let spy = spyOn(favoriteMoviesService, 'getFavoriteMovies').and.returnValue(EMPTY)
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled()

    })
    it('should show an error if  getting  movies fails', () => {
      let favoriteMoviesService = TestBed.inject(FavoriteMoviesService)
      let spy = spyOn(favoriteMoviesService, 'getFavoriteMovies').and.returnValue(throwError('error'))
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled()
      let debElement = fixture.debugElement.query(By.css('.error'))
      expect(debElement.nativeElement.textContent).toContain('error')
    })
  })
});
