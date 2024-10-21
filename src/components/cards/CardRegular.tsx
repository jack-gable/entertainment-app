import React, { ReactElement } from "react";
import CardRegularImage from "./CardRegularImage";
import Icon from "../Icon";
import Link from "next/link";
import VisuallyHidden from "../VisuallyHidden";
import { bookmarkCard } from "@/utils/types";
import BookmarkButton from "../BookmarkBtn";
import { MotionDiv } from "../MotionDiv";

interface CardRegularProps {
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

const CardRegular = ({
  title,
  backdropSrc,
  posterSrc,
  original_title,
  name,
  date,
  media,
  pageHref,
  mediaType,
  item,
  index = 0,
}: CardRegularProps) => {
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
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="rounded-xl bg-primary p-1 hover:bg-white/80 hover:text-black relative"
    >
      <div className="relative w-full overflow-hidden">
        <CardRegularImage
          backdrop_path={backdropSrc}
          poster_path={posterSrc}
          name={name}
          title={title}
          original_title={original_title}
        />
      </div>
      <div className="absolute top-2 right-2 px-2 pt-2 pb-1 bg-black/40 rounded">
        <BookmarkButton item={{ ...item, media_type: mediaType }} />
      </div>
      <Link href={pageHref}>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs flex items-center gap-1">
              {releaseYear}
              <Icon id="dot" />
              {media}
            </p>
            <div>
              <Icon id="info" size={18} className="hover:text-accent" />
              <VisuallyHidden>Info</VisuallyHidden>
            </div>
          </div>
          <h3 className="text-semibold flex-1 line-clamp-1">{title}</h3>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default CardRegular;
