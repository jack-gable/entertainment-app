"use client";
import Link from "next/link";
import React from "react";
import Icon from "../Icon";
import useSWR from "swr";
import { fetcher } from "@/utils";
import CardRegular from "../cards/CardRegular";
import { TvProp, MovieProp } from "@/utils/types";
import LoadingSpinner from "../LoadingSpinner";

const Collection = ({
  title,
  pageHref,
  className,
  endpoint,
  propType,
}: {
  title: string;
  pageHref: string;
  className?: string;
  endpoint: string;
  propType: string;
}) => {
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <section className="p-6 sm:py-8 sm:pr-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Link
            href={pageHref}
            className="flex items-center gap-1 hover:text-accent text-sm"
          >
            See More <Icon id="arrowUpRight" size={22} />
          </Link>
        </div>
        {!isLoading ? (
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full ${className}`}
          >
            {propType === "movie"
              ? data?.results
                  ?.slice(0, 8)
                  .map((item: MovieProp, index: number) => (
                    <CardRegular
                      key={item.id}
                      title={item.title}
                      posterSrc={item.poster_path}
                      backdropSrc={item.backdrop_path}
                      original_title={item.original_title}
                      name={item.title}
                      date={item.release_date}
                      mediaType={propType}
                      item={item}
                      media={<Icon id="film" size={18} />}
                      pageHref={`/movie/${item.id}`}
                      index={index}
                    />
                  ))
              : data?.results
                  ?.slice(0, 10)
                  .map((item: TvProp, index: number) => (
                    <CardRegular
                      key={item.id}
                      title={item?.name}
                      posterSrc={item.poster_path}
                      backdropSrc={item.backdrop_path}
                      original_title={item.original_name}
                      name={item.name}
                      date={item.first_air_date}
                      mediaType={propType}
                      item={item}
                      media={<Icon id="tv" size={18} />}
                      pageHref={`/tv/${item.id}`}
                      index={index}
                    />
                  ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </section>
  );
};

export default Collection;
