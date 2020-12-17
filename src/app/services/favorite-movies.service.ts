import { catchError, finalize, mergeMap, retry, retryWhen } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError, timer } from 'rxjs';

export const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = [0]
}: {
  maxRetryAttempts?: number,
  scalingDuration?: number,
  excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt *
          scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => console.log('We are done!'))
  );
};

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor(private readonly httpClient?: HttpClient,
    private readonly logger?: LoggerService) { }
 
  getFavoriteMovies():Observable<string[]>{
    return this.httpClient.get<string[]>(environment.serviceUrl)
       .pipe(retry(environment.httpServiceRetrials))
      .pipe(catchError((error)=>{
        console.error("error:",error)
        this.logger.logError(error) 
        return throwError(error)
      }))
  } 
}
