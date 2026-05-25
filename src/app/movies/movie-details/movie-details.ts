import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { ImdbService } from '../../services/imdb-service';
import { IMovie } from '../../interfaces/i-movie';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-details',
  imports: [Breadcrumbs],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetails {
  private route = inject(ActivatedRoute);
  private imdbService = inject(ImdbService);
  movieId: string | null = this.route.snapshot.paramMap.get('movieId');
  movie = signal<IMovie | undefined>(undefined);
  imageUrl = environment.IMAGE_URL;

  ngOnInit(): void {
    if (this.movieId) {
      this.imdbService.getMovieById(this.movieId).subscribe({
        next: (data) => this.movie.set(data),
        error: (err) => console.error('Error cargando película:', err)
      });
    }
  }
}
