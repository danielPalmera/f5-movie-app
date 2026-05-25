import { IMovie } from './i-movie';

export interface IMovies {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}
