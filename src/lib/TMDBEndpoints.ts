export const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASEURL;
export const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original";

//getGenre-movie genres
export function getGenreMovie() {
  return `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getMovie-details
export function getMovieDetail(movieId: string) {
  return `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getMovie-videos
export function getMovieVideo(movieId: string) {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}

//getMovie-credits
export function getMovieCredits(movieId: string) {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-trending movies
export function getTrendingMovies(pages: string) {
  return `https://api.themoviedb.org/3/trending/movie/week?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-popular
export function getPopularMovies(pages: string) {
  return `https://api.themoviedb.org/3/movie/popular?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-now_playing
export function getNowPlayingMovies(pages: string) {
  return `https://api.themoviedb.org/3/movie/now_playing?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-upcoming
export function getUpcomingMovies(pages: string) {
  return `https://api.themoviedb.org/3/movie/upcoming?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-upcoming
export function getTopRatedMovies(pages: string) {
  return `https://api.themoviedb.org/3/movie/top_rated?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-trending tv
export function getTrendingTV(pages: string) {
  return `https://api.themoviedb.org/3/trending/tv/week?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getGenre-tv genres
export function getGenreTV() {
  return `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-airingtoday tv
export function getAiringTodayTV(pages: string) {
  return `https://api.themoviedb.org/3/tv/airing_today?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-popular tv
export function getPopularTV(pages: string) {
  return `https://api.themoviedb.org/3/tv/popular?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection-on air tv
export function getOnAirTV(pages: string) {
  return `https://api.themoviedb.org/3/tv/on_the_air?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//getCollection- toprated tv
export function getTopRatedTV(pages: string) {
  return `https://api.themoviedb.org/3/tv/top_rated?&language=en-US&sort_by=popularity.desc&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get TV details
export function getTVDetail(TvId: string) {
  return `https://api.themoviedb.org/3/tv/${TvId}?append_to_response=videos&language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get TV credits
export function getTvCredits(TvId: string) {
  return `https://api.themoviedb.org/3/tv/${TvId}/credits?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get TV videos
export function getTVVideos(TvId: string) {
  return `https://api.themoviedb.org/3/tv/${TvId}/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get genre collections - movie
export function getGenreCollectionsMovie(genreId: string, pages: string) {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc&with_origin_country=US&with_genres=${genreId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get genre collections - tv
export function getGenreCollectionsTV(genreId: string, pages: string) {
  return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pages}&sort_by=popularity.desc&with_origin_country=US&with_genres=${genreId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get search multi
export function getSearchMulti(query: string, pages: string) {
  return `https://api.themoviedb.org/3/search/multi?&query=${encodeURIComponent(
    query
  )}&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get Search TV
export function getSearchTV(query: string, pages: string) {
  return `https://api.themoviedb.org/3/search/tv?&query=${encodeURIComponent(
    query
  )}&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
//get Search movies
export function getSearchMovie(query: string, pages: string) {
  return `https://api.themoviedb.org/3/search/movie?&query=${encodeURIComponent(
    query
  )}&page=${pages}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
}
