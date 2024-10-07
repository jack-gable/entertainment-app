import React from "react";
import { IconType } from "react-icons";
import { FaBookmark } from "react-icons/fa6";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { TbDeviceTvOld } from "react-icons/tb";

interface IconProps {
  id: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

type Icons = {
  [key: string]: IconType;
};

const icons: Icons = {
  bookmark: FaBookmark,
  film: MdLocalMovies,
  tv: TbDeviceTvOld,
  squares: PiSquaresFourFill,
  movie: MdMovie,
};

const Icon = ({ id, size, color, className, onClick }: IconProps) => {
  const Component = icons[id];
  return (
    <div>
      <Component
        size={size}
        color={color}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};

export default Icon;
