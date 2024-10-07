import { TvProp } from "@/utils/types";
import React from "react";

type Props = {
  item: TvProp;
};

const TvCard = ({ item }: Props) => {
  return (
    <div className="min-w-64 h-52 border rounded-lg border-white bg-primary">
      {item.name}
    </div>
  );
};

export default TvCard;
