import { LoggerService } from './logger.service';
import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FavoriteMoviesService } from './favorite-movies.service';

describe('FavoriteMoviesService', () => {
  let service: FavoriteMoviesService;
  const favoriteTestMovies = ["2001: A Space Odysey", "Star Wars", "Star Trek"]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FavoriteMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
  it('should return the fav movies as an Observable',()=>{
    //arrange
    let resultMovies:string[]
    const httpTestContrl= TestBed.inject(HttpTestingController)
    //act
    service.getFavoriteMovies().subscribe(data => resultMovies=data)
    //assert
    const testRequest = httpTestContrl.expectOne(environment.serviceUrl)
    testRequest.flush(favoriteTestMovies)
    expect(testRequest.request.method).toEqual('GET')
    expect(resultMovies).toEqual(favoriteTestMovies)
  })
  it('should return the error from Observable and log the error',()=>{
    //arrange
    let resultError= false
    const httpTestContrl= TestBed.inject(HttpTestingController)
    const logger= TestBed.inject(LoggerService)
    const loggerSpy = spyOn(logger,'logError')
    //act
    service.getFavoriteMovies().subscribe(()=>{},(error)=>{
      resultError= true
    })
    //assert
    const testRequest = httpTestContrl.expectOne(environment.serviceUrl)
    testRequest.flush('Error',{status:500,statusText:'internal server error'})
    expect(testRequest.request.method).toEqual('GET')
    expect(resultError).toBeTruthy()
    expect(loggerSpy).toHaveBeenCalled()
  })
});
