import React, { ReactElement, useState } from "react";
import CardTrendingImage from "./CardTrendingImage";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import BookmarkButton from "../BookmarkBtn";
import { bookmarkCard } from "@/utils/types";
import { MotionDiv } from "../MotionDiv";

interface CardTrendingProps {
  backdropSrc?: string;
  posterSrc?: string;
  name?: string;
  title?: string;
  original_title?: string;
  date?: string;
  media?: ReactElement;
  pageHref: string;
  mediaType?: string;
  item?: bookmarkCard;
  index?: number;
}

const CardTrending = ({
  backdropSrc,
  name,
  title,
  original_title,
  pageHref,
  date,
  media,
  mediaType,
  item,
  index = 0,
}: CardTrendingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const releaseDate = new Date(date!);
  const releaseYear = releaseDate.getFullYear();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.45,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full overflow-hidden py-2"
    >
      <CardTrendingImage
        backdrop_path={backdropSrc}
        name={name}
        title={title}
        original_title={original_title}
      />
      <div className="absolute top-4 right-2 px-2 pt-2 pb-1 bg-black/40 rounded">
        <BookmarkButton item={{ ...item, media_type: mediaType }} />
      </div>

      {!isMobile && (
        <Link
          href={pageHref}
          className={`m-2 p-4 w-[70%] flex flex-col gap-2 absolute bottom-3 opacity-0 rounded-md ${
            isHovered ? "bg-black/40 opacity-100" : "bg-transparent opacity-0"
          }`}
        >
          <p className="text-xs flex items-center gap-1">
            {releaseYear}
            <Icon id="dot" />
            {media}
          </p>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-semibold">{title}</h3>
            <div>
              <Icon id="info" size={18} className="hover:text-accent" />
              <VisuallyHidden>Info</VisuallyHidden>
            </div>
          </div>
        </Link>
      )}

      {isMobile && (
        <Link
          href={pageHref}
          className={`m-2 p-4 flex flex-col gap-2 absolute bottom-3 bg-black/40 rounded-md`}
        >
          <p className="text-xs flex items-center gap-1">
            {releaseYear}
            <Icon id="dot" />
            {media}
          </p>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-semibold">{title}</h3>
            <div>
              <Icon id="info" size={18} className="hover:text-accent" />
              <VisuallyHidden>Info</VisuallyHidden>
            </div>
          </div>
        </Link>
      )}
    </MotionDiv>
  );
};

export default CardTrending;
