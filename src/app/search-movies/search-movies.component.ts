import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
@Output() movieToAdd= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
