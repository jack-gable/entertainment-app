"use client";

import CardRegular from "@/components/cards/CardRegular";
import Icon from "@/components/Icon";
import { useBookmarks } from "@/context/BookmarkContext";
import React from "react";

const Bookmarkpage = () => {
  const { bookmarks } = useBookmarks();

  const bookmarkedMovies = bookmarks.filter(
    (bookmark) => bookmark.media_type === "movie"
  );
  const bookmarkedTv = bookmarks.filter(
    (bookmark) => bookmark.media_type === "tv"
  );

  return (
    <main className="p-6 sm:py-8 sm:pr-8 w-full sm:overflow-auto ">
      <h1 className="text-3xl font-bold">Bookmarks</h1>
      <section className="pt-6 w-full">
        <h2 className="text-2xl font-bold pb-4">Saved Movies</h2>
        {bookmarkedMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
            {bookmarkedMovies.map((bookmark) => (
              <CardRegular
                key={bookmark.id}
                title={bookmark.title}
                posterSrc={bookmark.poster_path}
                backdropSrc={bookmark.backdrop_path}
                original_title={bookmark.original_title}
                name={bookmark.title}
                date={bookmark.release_date}
                item={bookmark}
                media={<Icon id="film" size={18} />}
                pageHref={`/movie/${bookmark.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="pl-6 italic">No Movies Saved Yet...</p>
        )}
      </section>
      <section className="pt-6 w-full">
        <h2 className="text-2xl font-bold pb-4">Saved TV Shows</h2>
        {bookmarkedTv.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
            {bookmarkedTv.map((bookmark) => (
              <CardRegular
                key={bookmark.id}
                title={bookmark.name}
                posterSrc={bookmark.poster_path}
                backdropSrc={bookmark.backdrop_path}
                original_title={bookmark.original_name}
                name={bookmark.name}
                date={bookmark.first_air_date}
                item={bookmark}
                media={<Icon id="tv" size={18} />}
                pageHref={`/tv/${bookmark.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="pl-6 italic">No TV Shows Saved Yet...</p>
        )}
      </section>
    </main>
  );
};

export default Bookmarkpage;
