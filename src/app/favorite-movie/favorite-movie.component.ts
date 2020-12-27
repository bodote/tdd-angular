import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css']
})
export class FavoriteMovieComponent implements OnInit {
@Input() movieName: string
@Output() deleteMovie = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
