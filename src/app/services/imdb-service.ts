import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMovie } from '../interfaces/i-movie';
import { IMovies } from '../interfaces/i-movies';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private http = inject(HttpClient);

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${environment.API_TOKEN}`,
      'accept': 'application/json'
    });
  }

  private get baseUrl(): string {
    return 'https://api.themoviedb.org/3';
  }

  getMovies(): Observable<IMovie[]> {
    return this.http
      .get<IMovies>(environment.API_URL, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  getMovieById(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.baseUrl}/movie/${id}`, { headers: this.headers });
  }

}
