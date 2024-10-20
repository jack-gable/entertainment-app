"use client";
import Collection from "@/components/collection/Collection";
import CollectionTrending from "@/components/collection/CollectionTrending";
import Footer from "@/components/Footer";
import Searchbar from "@/components/Searchbar";
import { useState } from "react";

const Home = () => {
  const [display, setDisplay] = useState(true);

  return (
    <main className="overflow-auto w-full">
      <Searchbar
        display={display}
        setDisplay={setDisplay}
        className="pl-6"
        placeholder="Search Movies or TV"
        searchPath="/search/"
      />

      {display ? (
        <>
          <CollectionTrending
            title="Trending Movies"
            pageHref="/movie/trending"
            endpoint="/api/movie/trending/1"
            propType="movie"
          />
          <Collection
            title="Popular Movies"
            pageHref="/movie/popular"
            endpoint="/api/movie/popular/1"
            propType="movie"
          />
          <Collection
            title="Top Rated Movies"
            pageHref="/movie/toprated"
            endpoint="/api/movie/toprated/1"
            propType="movie"
          />
          <Collection
            title="Now Playing Movies"
            pageHref="/movie/nowplaying"
            endpoint="/api/movie/nowplaying/1"
            propType="movie"
          />
          <Collection
            title="Upcoming Movies"
            pageHref="/movie/upcoming"
            endpoint="/api/movie/upcoming/1"
            propType="movie"
          />
        </>
      ) : (
        <>
          <CollectionTrending
            title="Trending TV Shows"
            pageHref="/tv/trending"
            endpoint="/api/tv/trending/1"
            propType="tv"
          />
          <Collection
            title="Popular TV Shows"
            pageHref="/tv/popular"
            endpoint="/api/tv/popular/1"
            propType="tv"
          />
          <Collection
            title="Top Rated TV Shows"
            pageHref="/tv/toprated"
            endpoint="/api/tv/toprated/1"
            propType="tv"
          />
          <Collection
            title="TV Shows Airing Today"
            pageHref="/tv/airingtoday"
            endpoint="/api/tv/airingtoday/1"
            propType="tv"
          />
          <Collection
            title="TV Shows On Air"
            pageHref="/tv/onair"
            endpoint="/api/tv/onair/1"
            propType="tv"
          />
        </>
      )}
      <Footer />
    </main>
  );
};

export default Home;
