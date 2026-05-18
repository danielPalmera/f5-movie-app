import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies/movies-list/movies-list';
import { MovieDetails } from './movies/movie-details/movie-details';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'movies',
        component: MoviesList
    },
    {
        path:'movies/:movieId',
        component: MovieDetails
    },
    { 
        path:'**',
        component: NotFound
        
    }
];
