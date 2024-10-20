"use client";

import { fetcher } from "@/utils";
import { Genre } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import CustomBtn from "../CustomBtn";
import Icon from "../Icon";
import YouTube from "react-youtube";
import Rating from "../Rating";
import VisuallyHidden from "../VisuallyHidden";
import LoadingSpinner from "../LoadingSpinner";

const TvPage = ({ id }: { id: string }) => {
  const [display, setDisplay] = useState(1);
  const endpoint = `/api/tv/${id}`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);
  const router = useRouter();
  const score = data?.vote_average;
  const renderRating = (score: number): number => {
    if (score !== undefined) {
      return parseFloat((score / 2).toPrecision(1));
    } else {
      return 0;
    }
  };

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data</div>;
  }

  const renderTrailer = () => {
    // check for officialTrailer if not available then selects the first valid key
    const officialTrailer = data?.videos?.results.find(
      (item: any) => item.name === "Official Trailer"
    );
    const defaultKey = officialTrailer
      ? officialTrailer.key
      : data?.videos?.results[0]?.key;

    return (
      <YouTube
        className={
          "absolute top-0 left-0 right-0 bottom-0 z-[1] cursor-pointer"
        }
        videoId={defaultKey}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
            controls: 1,
            volume: 50,
            mute: 0,
          },
        }}
      />
    );
  };

  return (
    <section className="p-6 sm:py-8 sm:pr-8 w-full">
      {!isLoading ? (
        <>
          <article className="hidden sm:block">
            {display === 1 && (
              <div className="bg-primary rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-8">
                <div>
                  <div className="w-[350px] h-[530px] rounded-lg overflow-hidden relative">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      alt="Movie Poster"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex justify-center items-center pt-4">
                    <Rating numRating={renderRating(score)} />
                    <VisuallyHidden>
                      TV rating: {renderRating(score)}
                    </VisuallyHidden>
                  </div>
                </div>
                <div className="sm:w-3/5 flex flex-col gap-6 w-full">
                  <h1 className="text-3xl font-bold">{data?.name}</h1>
                  <div>
                    <h4 className="text-lg font-bold pb-1">Overview</h4>
                    <p className="text-sm">{data?.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold pb-1">Genres</h4>
                    <div>
                      {data?.genres?.map((genre: Genre) => (
                        <span
                          className="border border-accent px-2 py-1 rounded-2xl mr-2 text-sm font-semibold"
                          key={genre.id}
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold pb-1">Cast</h4>
                    <div className="flex gap-1 flex-wrap">
                      {data?.cast?.slice(0, 10).map((cast: any) => (
                        <p
                          className="border border-slate-700 px-2 py-1 rounded-2xl mr-2 text-xs font-semibold"
                          key={cast.id}
                        >
                          {cast.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-12">
                    <div className="font-bold">
                      Language
                      <p className="text-sm font-normal uppercase">
                        {data?.original_language}
                      </p>
                    </div>
                    <div className="font-bold">
                      First Aired
                      <p className="text-sm font-normal">
                        {data?.first_air_date}
                      </p>
                    </div>
                    <div className="font-bold">
                      Last Aired
                      <p className="text-sm font-normal">
                        {data?.last_air_date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {display === 2 && (
              <div className="w-full mx-auto">
                <div className="bg-primary rounded-xl p-6 sm:p-8 relative overflow-hidden w-full sm:min-h-[600px]">
                  {data?.videos.results ? renderTrailer() : null}
                  <Image
                    className="relative z-[0] w-full h-auto"
                    src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                    style={{ objectFit: "contain" }}
                    alt={data?.title}
                    fill
                  />
                </div>
              </div>
            )}
            <div className="flex justify-center items-center gap-8 mt-6 bg-primary rounded-xl p-4">
              <CustomBtn
                classname="flex items-center gap-2"
                onClick={() => router.back()}
              >
                <Icon id="arrowLeft" size={20} />
                Back
              </CustomBtn>
              <CustomBtn onClick={() => setDisplay(1)} disabled={display === 1}>
                Details
              </CustomBtn>
              <CustomBtn onClick={() => setDisplay(2)} disabled={display === 2}>
                Trailer
              </CustomBtn>
            </div>
          </article>

          <article className="sm:hidden">
            <div className="pb-4 sm:pb-0">
              <div className="w-full mx-auto">
                <div className="bg-primary rounded-xl p-6 sm:p-8 relative overflow-hidden w-full min-h-[300px] sm:min-h-[600px]">
                  {data?.videos.results ? renderTrailer() : null}
                  <Image
                    className="relative z-[0] w-full h-auto"
                    src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                    style={{ objectFit: "contain" }}
                    alt={data?.title}
                    fill
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pt-4">
                <Rating numRating={renderRating(score)} />
                <VisuallyHidden>
                  TV rating: {renderRating(score)}
                </VisuallyHidden>
              </div>
            </div>
            <div className="sm:w-3/5 flex flex-col gap-6 w-full">
              <h1 className="text-3xl font-bold">{data?.name}</h1>
              <div>
                <h4 className="text-lg font-bold pb-1">Overview</h4>
                <p className="text-sm">{data?.overview}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold pb-1">Genres</h4>
                <div>
                  {data?.genres?.map((genre: Genre) => (
                    <span
                      className="border border-accent px-2 py-1 rounded-2xl mr-2 text-sm font-semibold"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold pb-1">Cast</h4>
                <div className="flex gap-1 flex-wrap">
                  {data?.cast?.slice(0, 10).map((cast: any) => (
                    <p
                      className="border border-slate-700 px-2 py-1 rounded-2xl mr-2 text-xs font-semibold"
                      key={cast.id}
                    >
                      {cast.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-12">
                <div className="font-bold">
                  Language
                  <p className="text-sm font-normal uppercase">
                    {data?.original_language}
                  </p>
                </div>
                <div className="font-bold">
                  First Aired
                  <p className="text-sm font-normal">{data?.first_air_date}</p>
                </div>
                <div className="font-bold">
                  Last Aired
                  <p className="text-sm font-normal">{data?.last_air_date}</p>
                </div>
              </div>
            </div>
          </article>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default TvPage;
