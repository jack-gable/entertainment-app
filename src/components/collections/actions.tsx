"use server";
import { MovieProp, TvProp } from "../../utils/types";
import MovieCard from "../cards/MovieCard";
import TvCard from "../cards/TvCard";

export const fetchTrendingMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return data?.results?.map((item: MovieProp) => (
    <MovieCard key={item.id} item={item} />
  ));
};

export const fetchTrendingTv = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?&language=en-US&sort_by=popularity.desc&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();

  return data?.results?.map((item: TvProp) => (
    <TvCard key={item.id} item={item} />
  ));
};
