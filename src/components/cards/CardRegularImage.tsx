import React from "react";
import Image from "next/image";

interface CardRegularImageProps {
  backdrop_path?: string;
  poster_path?: string;
  name?: string;
  title?: string;
  original_title?: string;
}

const CardRegularImage = ({
  backdrop_path,
  poster_path,
  name,
  title,
  original_title,
}: CardRegularImageProps) => {
  return (
    <Image
      className="z-0 rounded-lg"
      src={
        backdrop_path
          ? `https://image.tmdb.org/t/p/w780/${backdrop_path}`
          : `https://image.tmdb.org/t/p/w300/${poster_path}`
      }
      style={{ objectFit: "cover" }}
      width={500}
      height={300}
      alt={name! || title! || original_title!}
      loading="lazy"
    />
  );
};

export default CardRegularImage;
