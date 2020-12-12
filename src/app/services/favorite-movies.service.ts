import { catchError } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor(private readonly httpClient?: HttpClient,
    private readonly logger?: LoggerService) { }

  getFavoriteMovies():Observable<string[]>{
    return this.httpClient.get<string[]>(environment.serviceUrl)
      .pipe(catchError((error)=>{
        this.logger.logError(error) 
        return throwError(error)
      }))
  } 
}
