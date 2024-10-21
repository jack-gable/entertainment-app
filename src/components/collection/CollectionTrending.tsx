"use client";
import Link from "next/link";
import React from "react";
import Icon from "../Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardTrending from "../cards/CardTrending";
import useSWR from "swr";
import { fetcher } from "@/utils";
import { MovieProp, TvProp } from "@/utils/types";
import LoadingSpinner from "../LoadingSpinner";

const CollectionTrending = ({
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
    <section className="p-6 sm:pt-8 sm:pb-0 sm:pr-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Link
            href={pageHref}
            className="flex items-center gap-1 hover:text-accent text-sm"
          >
            See More <Icon id="arrowUpRight" size={22} />
          </Link>
        </div>
        {!isLoading ? (
          <div className="w-full">
            <Swiper
              className={`w-full bg-background ${className}`}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={8}
              navigation={true}
              pagination={{ type: "progressbar" }}
              scrollbar={{ draggable: true, dragSize: "auto", hide: true }}
              breakpoints={{
                650: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3.25,
                },
              }}
            >
              {propType === "movie"
                ? data?.results?.map((item: MovieProp, index: number) => (
                    <SwiperSlide className="m-0" key={item.id}>
                      <CardTrending
                        backdropSrc={item.backdrop_path}
                        name={item.title}
                        title={item.title}
                        original_title={item.original_title}
                        date={item.release_date}
                        media={<Icon id="film" size={18} />}
                        pageHref={`/movie/${item.id}`}
                        item={item}
                        mediaType={propType}
                        index={index}
                      />
                      <div className="text-[10rem] font-bold opacity-40 absolute bottom-[-9%] right-[3%] z-0">
                        {index + 1}
                      </div>
                    </SwiperSlide>
                  ))
                : data?.results?.map((item: TvProp, index: number) => (
                    <SwiperSlide className="m-0" key={item.id}>
                      <CardTrending
                        backdropSrc={item.backdrop_path}
                        name={item.name}
                        title={item.name}
                        original_title={item.original_name}
                        date={item.first_air_date}
                        media={<Icon id="tv" size={18} />}
                        pageHref={`/tv/${item.id}`}
                        item={item}
                        mediaType={propType}
                        index={index}
                      />
                      <div className="text-[10rem] font-bold opacity-40 absolute bottom-[-9%] right-[3%] z-0">
                        {index + 1}
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </section>
  );
};

export default CollectionTrending;
