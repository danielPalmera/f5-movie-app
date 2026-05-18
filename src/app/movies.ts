import { Injectable } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  director: string;
  genre: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: Movie[] = [
    { id: '1', title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi' },
    { id: '2', title: 'The Godfather', director: 'Francis Ford Coppola', genre: 'Crime' },
    { id: '3', title: 'Pulp Fiction', director: 'Quentin Tarantino', genre: 'Drama' },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
