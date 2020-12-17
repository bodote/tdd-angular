import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css']
})
export class FavoriteMovieComponent implements OnInit {
@Input() movieName: string
  constructor() { }

  ngOnInit(): void {
  }

}
