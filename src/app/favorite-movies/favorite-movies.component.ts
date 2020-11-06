import { FavoriteMoviesService } from './../services/favorite-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: string[] 

  constructor(private favMoService : FavoriteMoviesService) { }

  ngOnInit(): void {
    this.favMoService.getFavoriteMovies().subscribe(data=>{
      this.favoriteMovies = data
    })
  }

}
