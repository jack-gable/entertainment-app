"use client";
import Searchbar from "@/components/Searchbar";
import { fetcher } from "@/utils";
import React, { useState } from "react";
import useSWR from "swr";
import { MovieProp } from "@/utils/types";
import CardRegular from "@/components/cards/CardRegular";
import Icon from "@/components/Icon";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner";

const SearchMoviespage = ({ params }: { params: { id: string } }) => {
  const [page, setPage] = useState(1);
  const query = params.id;
  const endpoint = `/api/search/movie/${query}?page=${page}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full overflow-auto">
      <div className="flex flex-col-reverse gap-4 sm:block">
        <h1 className="text-3xl font-bold sm:-mb-14">
          <span className="text-xs">Search Results For </span>
          {decodeURI(query)}
        </h1>
        <Searchbar
          className="sm:flex-row-reverse"
          placeholder="Search Movies"
          searchPath="/search/movie/"
        />
      </div>
      {!isLoading ? (
        <>
          <section className="pt-6 w-full">
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
                  item={item}
                  mediaType={item.media_type}
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

export default SearchMoviespage;
