export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids?: number[];
    genres?: { id: number; name: string }[];
    original_language: string;
    original_title: string;
    adult: boolean;
    video: boolean;
}
