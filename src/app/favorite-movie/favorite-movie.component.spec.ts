import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMovieComponent } from './favorite-movie.component';


describe('FavoriteMovieComponent', () => {
  let component: FavoriteMovieComponent;
  let fixture: ComponentFixture<FavoriteMovieComponent>;;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain label with text',()=>{
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('label').textContent).toContain('delete');
    const expFix = expect(fixture)
    expFix.toMatchSnapshot()
  
  })
});
