import { HttpClient } from '@angular/common/http';
import { inject , Injectable } from '@angular/core';
import { IMovies } from '../interfaces/i-movies';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesServices {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/movies';

  getMovies() {
    return this.http.get<IMovies[]>(`${this.url}`);
  }
  
}
