import { LoggerService } from './logger.service';
import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { FavoriteMoviesService } from './favorite-movies.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  it('should return the fav movies as an Observable', () => {
    //arrange
    let resultMovies: string[]
    const httpTestContrl = TestBed.inject(HttpTestingController)
    //act
    service.getFavoriteMovies().subscribe(data => resultMovies = data)
    //assert
    const testRequest = httpTestContrl.expectOne(environment.serviceUrl)
    testRequest.flush(favoriteTestMovies)
    expect(testRequest.request.method).toEqual('GET')
    expect(resultMovies).toEqual(favoriteTestMovies)
  })
  it('should return the error from Observable and log the error even after retrails', () => {
    //arrange
    let resultError = false
    const httpTestContrl = TestBed.inject(HttpTestingController)
    const logger = TestBed.inject(LoggerService)
    const loggerSpy = spyOn(logger, 'logError')
    //act
    service.getFavoriteMovies().subscribe(() => { }, (error) => {
      resultError = true
    })
    //assert 
    let testRequest: TestRequest
    for (let n = 1; n <= environment.httpServiceRetrials; n++) {
      testRequest = httpTestContrl.expectOne(environment.serviceUrl)
      testRequest.flush('Error', { status: 500, statusText: 'internal server error' })
      expect(testRequest.request.method).toEqual('GET')
      expect(resultError).toBeFalsy()
      expect(loggerSpy).not.toHaveBeenCalled()
    }
    testRequest = httpTestContrl.expectOne(environment.serviceUrl)
    testRequest.flush('Error', { status: 500, statusText: 'internal server error' })
    expect(testRequest.request.method).toEqual('GET')
    expect(resultError).toBeTruthy()
    expect(loggerSpy).toHaveBeenCalled()
  })
  it('should return return the fav movie after 3rd retrail', () => {
    //arrange
    let resultMovies: string[]
    let resultError = false
    const httpTestContrl = TestBed.inject(HttpTestingController)
    const logger = TestBed.inject(LoggerService)
    const loggerSpy = spyOn(logger, 'logError')
    //act
    service.getFavoriteMovies().subscribe(data => resultMovies = data, (error) => {
      resultError = true;

    })
    //assert 
    let testRequest: TestRequest
    for (let n = 1; n <= environment.httpServiceRetrials; n++) {
      testRequest = httpTestContrl.expectOne(environment.serviceUrl)
      testRequest.flush('Error', { status: 500, statusText: 'internal server error' })
      expect(testRequest.request.method).toEqual('GET')
      expect(resultError).toBeFalsy()
      expect(loggerSpy).not.toHaveBeenCalled()
    }
    testRequest = httpTestContrl.expectOne(environment.serviceUrl)
    testRequest.flush(favoriteTestMovies)
    expect(testRequest.request.method).toEqual('GET')
    expect(resultError).toBeFalsy()
    expect(loggerSpy).not.toHaveBeenCalled()
    expect(resultMovies).toEqual(favoriteTestMovies)
  })

  it('should return the error immediately from Observable and log the error if there is a connection problem ', () => {
    //arrange
    let resultError = false
    let httpErrorResponse: HttpErrorResponse
    const httpTestContrl = TestBed.inject(HttpTestingController)
    const logger = TestBed.inject(LoggerService)
    const loggerSpy = spyOn(logger, 'logError')
    //act
    service.getFavoriteMovies().subscribe(() => { }, (error) => {
      resultError = true
      httpErrorResponse = error
    })
    //assert 
    //assert 
    let testRequest: TestRequest
    const errorEvent = new ErrorEvent('network error')
    for (let n = 1; n <= environment.httpServiceRetrials; n++) {
      testRequest = httpTestContrl.expectOne(environment.serviceUrl)
      testRequest.error(errorEvent)
      expect(testRequest.request.method).toEqual('GET')
      expect(resultError).toBeFalsy()
      expect(loggerSpy).not.toHaveBeenCalled()
    }

    testRequest = httpTestContrl.expectOne(environment.serviceUrl)
   
    testRequest.error(errorEvent)
    expect(testRequest.request.method).toEqual('GET')
    expect(resultError).toBeTruthy()
    expect(loggerSpy).toHaveBeenCalled()
    expect(httpErrorResponse.error.type).toEqual(errorEvent.type)
  })
});
