"use client";
import CardRegular from "@/components/cards/CardRegular";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import LoadingSpinner from "@/components/LoadingSpinner";
import Pagination from "@/components/Pagination";
import Searchbar from "@/components/Searchbar";
import { fetcher } from "@/utils";
import { TvProp } from "@/utils/types";
import React, { useState } from "react";
import useSWR from "swr";

const TvPopularpage = () => {
  const [page, setPage] = useState(1);
  const endpoint = `/api/tv/popular/${page}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full overflow-auto">
      <h1 className="text-3xl font-bold -mb-14">Popular TV Shows</h1>
      <Searchbar
        className="sm:flex-row-reverse"
        placeholder="Search TV Shows"
        searchPath="/search/tv/"
      />
      {!isLoading ? (
        <>
          <section className="pt-8 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {data?.results?.map((item: TvProp) => (
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

export default TvPopularpage;
