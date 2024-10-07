import React from "react";
import { fetchTrendingMovies, fetchTrendingTv } from "./actions";

const Collections = async () => {
  const movieData = await fetchTrendingMovies(1);
  const tvData = await fetchTrendingTv(1);

  return (
    <section className="max-w-4xl py-8 pt-8">
      <div className="flex flex-col gap-4 pb-8">
        <h1 className="text-2xl font-bold">Trending Movies</h1>
        <div className="overflow-x-scroll flex items-center gap-6 w-full py-4">
          {movieData}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Trending TV Shows</h1>
        <div className="overflow-x-scroll flex items-center gap-6 w-full py-4">
          {tvData}
        </div>
      </div>
    </section>
  );
};

export default Collections;
