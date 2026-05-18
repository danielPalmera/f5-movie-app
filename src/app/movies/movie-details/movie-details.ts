import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-movie-details',
  imports: [Breadcrumbs],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetails {
  private route = inject(ActivatedRoute);
  movieId: string | null = this.route.snapshot.paramMap.get('movieId');
  
  /*
  movieId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('movieId');
    });
  }
  */
}
