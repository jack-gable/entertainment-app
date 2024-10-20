import React from "react";
import Icon from "./Icon";

const Rating = ({ numRating }: { numRating: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          id="star"
          key={i}
          className={`${
            i < numRating ? "text-yellow-500" : "text-gray-400"
          } w-6 h-6`}
        />
      ))}
    </div>
  );
};

export default Rating;
