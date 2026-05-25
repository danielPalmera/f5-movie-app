import { Component, inject, signal } from '@angular/core';
import { IMovie } from '../../interfaces/i-movie';
import { ImdbService } from '../../services/imdb-service';
import { MovieListItem } from './movie-list-item/movie-list-item';

@Component({
  selector: 'app-movies-list',
  imports: [MovieListItem],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css'],
})
export class MoviesList {
  movies = signal<IMovie[]>([]);
  private imdbService = inject(ImdbService);

  ngOnInit(): void {
    this.imdbService.getMovies().subscribe((data) => {
      this.movies.set(data);
    });
  }

}