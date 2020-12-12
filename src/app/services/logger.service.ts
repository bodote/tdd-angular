import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logError(error){
    console.error(error)
    //call backend service to report error
    //....
  }
}
