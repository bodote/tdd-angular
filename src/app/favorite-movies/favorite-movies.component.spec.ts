import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FavoriteMoviesComponent } from './favorite-movies.component';

describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesComponent;
  let fixture: ComponentFixture<FavoriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Render',()=>{
    it('should have a title',()=>{
      let de = fixture.debugElement.queryAll(By.css('h1'))
      expect(de.length).toBe(1)
      expect(de[0].nativeElement.textContent).toContain('My Favorite Movies')
    })
    fit('should show the movies',()=>{
      component.favoriteMovies = ["Return of the Jedis","A Space Odyssey", "The Terminator"]
      fixture.detectChanges()
      let de = fixture.debugElement.queryAll(By.css('li'))
      expect(de.length).toBe(3)
      expect(de[0].nativeElement.textContent).toContain('Return of the Jedis')
      expect(de[2].nativeElement.textContent).toContain('The Terminator')
    })
  })
});
