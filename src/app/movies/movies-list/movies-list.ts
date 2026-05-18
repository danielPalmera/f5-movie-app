import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MoviesService } from '../../services/movies-service';
import { IMovies } from '../../interfaces/i-movies';

@Component({
  selector: 'app-movies-list',
  imports: [RouterLink],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css'],
})
export class MoviesList { 
  public movies: IMovies[];
  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getMovies();
  }
}
