import { MovieProp } from "@/utils/types";
import React from "react";

type Props = {
  item: MovieProp;
};

const MovieCard = ({ item }: Props) => {
  return (
    <div className="min-w-64 h-52 border rounded-lg border-white bg-primary">
      {item.title}
    </div>
  );
};

export default MovieCard;
