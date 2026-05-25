import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovie } from '../../../interfaces/i-movie';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-movie-list-item',
    imports: [RouterLink],
    templateUrl: './movie-list-item.html',
    styleUrls: ['./movie-list-item.css'],
})
export class MovieListItem {
    movie = input.required<IMovie>();
    imageUrl = environment.IMAGE_URL;
}
