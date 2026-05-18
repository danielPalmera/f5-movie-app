import { Injectable } from '@angular/core';
import {IMovies} from "../interfaces/i-movies";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: IMovies[] = [
    { id: '1', title: '2001: A Space Odyssey', director: 'Stanley Kubrick', genre: 'Sci-Fi' },
    { id: '2', title: '2010: The Year We Make Contact', director: 'Peter Hyams', genre: 'Sci-Fi' },
    { id: '3', title: 'The Fountains of Paradise', director: 'Adaptation Pending', genre: 'Sci-Fi' },
    { id: '7', title: 'I, Robot', director: 'Alex Proyas', genre: 'Sci-Fi' },
    { id: '8', title: 'Bicentennial Man', director: 'Chris Columbus', genre: 'Sci-Fi' },
    { id: '9', title: 'The End of Eternity', director: 'Adaptation Pending', genre: 'Sci-Fi' },
    { id: '10', title: 'Foundation', director: 'Apple TV Adaptation', genre: 'Sci-Fi' }
  ];

  getMovies(): IMovies[] {
    return this.movies;
  }
}
