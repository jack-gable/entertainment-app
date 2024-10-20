import React from "react";
import Image from "next/image";

interface CardTrendingImageProps {
  backdrop_path?: string;
  name?: string;
  title?: string;
  original_title?: string;
}

const CardTrendingImage = ({
  backdrop_path,
  name,
  title,
}: CardTrendingImageProps) => {
  return (
    <Image
      className="relative z-0 rounded-xl"
      src={
        backdrop_path ? `https://image.tmdb.org/t/p/w780/${backdrop_path}` : ""
      }
      style={{ objectFit: "cover" }}
      width={800}
      height={600}
      alt={name! || title!}
      priority={true}
    />
  );
};

export default CardTrendingImage;
