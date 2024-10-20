export interface MovieProp {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: [number];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvProp {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: [number];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: [string];
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreList {
  genres: Genre[];
}

export interface bookmarkCard {
  backdrop_path?: string;
  id?: number;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  adult?: boolean;
  original_language?: string;
  genre_ids?: [number];
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: [string];
}