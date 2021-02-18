import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css']
})
export class FavoriteMovieComponent implements OnInit {
@Input() movieName: string
@Output() deleteEmitter : EventEmitter<string>
  constructor() { 
    this.deleteEmitter = new EventEmitter<string>()
  }

  ngOnInit(): void {
    
  }
  deleteMovie(movie:string):void{
    this.deleteEmitter.emit(movie)
  }

}
