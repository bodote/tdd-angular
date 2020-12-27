import { catchError, finalize, mergeMap, retry, retryWhen } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor(private readonly httpClient?: HttpClient,
    private readonly logger?: LoggerService) { }

  getFavoriteMovies(): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.serviceUrl)
      .pipe(retry(environment.httpServiceRetrials))
      .pipe(catchError((error) => {
        console.error("error:", error)
        this.logger.logError(error)
        return throwError(error)
      }))
  }
  deleteMovie(movie:string){
    
  }
}
