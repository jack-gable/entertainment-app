import React from "react";
import { IconType } from "react-icons";
import {
  FaBookmark,
  FaRegBookmark,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa6";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { TbDeviceTvOld } from "react-icons/tb";
import { LuDot, LuChevronsUpDown } from "react-icons/lu";
import { FiInfo, FiArrowUpRight, FiSearch } from "react-icons/fi";

interface IconProps {
  id: string;
  size?: number;
  color?: string;
  className?: string;
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
  dot: LuDot,
  bookmarkOutline: FaRegBookmark,
  info: FiInfo,
  arrowUpRight: FiArrowUpRight,
  search: FiSearch,
  chevronsUpDown: LuChevronsUpDown,
  check: FaCheck,
  chevronLeft: FaChevronLeft,
  chevronRight: FaChevronRight,
  arrowLeft: FaArrowLeft,
  star: FaStar,
};

const Icon = ({ id, size, color, className }: IconProps) => {
  const Component = icons[id];
  return <Component size={size} color={color} className={className} />;
};

export default Icon;
