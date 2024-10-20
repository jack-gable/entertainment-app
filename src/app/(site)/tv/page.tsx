"use client";
import Searchbar from "@/components/Searchbar";
import { fetcher } from "@/utils";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Genre, TvProp } from "@/utils/types";
import ComboBox from "@/components/ComboBox";
import CardRegular from "@/components/cards/CardRegular";
import Icon from "@/components/Icon";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner";

const Tvpage = () => {
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const endpoint = `/api/tv/genre/${selectedGenre?.id}?page=${page}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  useEffect(() => {
    setPage(1);
  }, [selectedGenre]);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full overflow-auto">
      <h1 className="text-3xl font-bold">TV Shows</h1>
      <Searchbar placeholder="Search TV Shows" searchPath="/search/tv/">
        <ComboBox propType="tv" setGenre={setSelectedGenre} />
      </Searchbar>
      {!isLoading ? (
        <>
          <section className="pt-6 w-full">
            <div className="flex justify-between items-center w-full pb-6">
              <h2 className="uppercase text-2xl font-bold">
                <span className="text-sm">Genre:</span> {selectedGenre?.name}
              </h2>
            </div>
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

export default Tvpage;
