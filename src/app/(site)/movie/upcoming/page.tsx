"use client";
import CardRegular from "@/components/cards/CardRegular";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import LoadingSpinner from "@/components/LoadingSpinner";
import Pagination from "@/components/Pagination";
import Searchbar from "@/components/Searchbar";
import { fetcher } from "@/utils";
import { MovieProp } from "@/utils/types";
import React, { useState } from "react";
import useSWR from "swr";

const MovieUpcomingpage = () => {
  const [page, setPage] = useState(1);
  const endpoint = `/api/movie/upcoming/${page}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full overflow-auto">
      <h1 className="text-3xl font-bold -mb-14">Upcoming Movies</h1>
      <Searchbar
        className="sm:flex-row-reverse"
        placeholder="Search Movies"
        searchPath="/search/movie/"
      />
      {!isLoading ? (
        <>
          <section className="pt-8 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {data?.results?.map((item: MovieProp) => (
                <CardRegular
                  key={item.id}
                  title={item.title}
                  posterSrc={item.poster_path}
                  backdropSrc={item.backdrop_path}
                  original_title={item.original_title}
                  name={item.title}
                  date={item.release_date}
                  media={<Icon id="film" size={18} />}
                  pageHref={`/movie/${item.id}`}
                />
              ))}
            </div>
          </section>
          <Pagination
            page={page}
            setPage={setPage}
            total_pages={data?.total_pages}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </main>
  );
};

export default MovieUpcomingpage;
