"use client";
import Searchbar from "@/components/Searchbar";
import { fetcher } from "@/utils";
import React, { useState } from "react";
import useSWR from "swr";
import { MovieProp, TvProp } from "@/utils/types";
import CardRegular from "@/components/cards/CardRegular";
import Icon from "@/components/Icon";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner";

const SearchAllpage = ({ params }: { params: { id: string } }) => {
  const [page, setPage] = useState(1);
  const query = params.id;
  const endpoint = `/api/search/${query}?page=${page}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  const filteredData = data?.results?.filter(
    (result: MovieProp | TvProp) => result.media_type !== "person"
  );

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full overflow-auto">
      <div className="flex flex-col-reverse gap-4 sm:block">
        <h1 className="text-3xl font-bold sm:-mb-14">
          <span className="text-xs">Search Results For </span>
          {decodeURI(query)}
        </h1>
        <Searchbar
          className="sm:flex-row-reverse"
          placeholder="Search Movies or TV"
          searchPath="/search/"
        />
      </div>
      {!isLoading ? (
        <>
          <section className="pt-6 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {filteredData?.map((item: MovieProp | TvProp) => {
                if ("title" in item) {
                  // item is now known to be MovieProp
                  return (
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
                  );
                } else {
                  // item is now known to be TvProp
                  return (
                    <CardRegular
                      key={item.id}
                      title={item.name}
                      posterSrc={item.poster_path}
                      backdropSrc={item.backdrop_path}
                      original_title={item.original_name}
                      name={item.name}
                      date={item.first_air_date}
                      media={<Icon id="tv" size={18} />}
                      pageHref={`/tv/${item.id}`}
                    />
                  );
                }
              })}
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

export default SearchAllpage;
