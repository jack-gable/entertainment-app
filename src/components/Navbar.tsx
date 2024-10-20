"use client";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { usePathname } from "next/navigation";
import VisuallyHidden from "./VisuallyHidden";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary p-6 sm:m-6 sm:rounded-2xl md:h-[calc(100% - 24px)] flex sm:flex-col gap-12 justify-between sm:justify-normal sm:min-w-fit">
      <div>
        <Link href="/">
          <Icon id="movie" size={26} className="text-accent" />
          <VisuallyHidden>Home</VisuallyHidden>
        </Link>
      </div>
      <ul className="flex sm:flex-col gap-8 items-center">
        <li>
          <Link href="/">
            <Icon
              id="squares"
              size={22}
              className={`${
                pathname === "/" ? "text-white" : "text-secondary"
              } hover:scale-[1.75]`}
            />
            <VisuallyHidden>Home</VisuallyHidden>
          </Link>
        </li>
        <li>
          <Link href="/movie">
            <Icon
              id="film"
              size={20}
              className={`${
                pathname === "/movie" ? "text-white" : "text-secondary"
              } hover:scale-[1.75]`}
            />
            <VisuallyHidden>Movies</VisuallyHidden>
          </Link>
        </li>
        <li>
          <Link href="/tv">
            <Icon
              id="tv"
              size={20}
              className={`${
                pathname === "/tv" ? "text-white" : "text-secondary"
              } hover:scale-[1.75]`}
            />
            <VisuallyHidden>TV</VisuallyHidden>
          </Link>
        </li>
        <li>
          <Link href="/bookmark">
            <Icon
              id="bookmark"
              size={18}
              className={`${
                pathname === "/bookmark" ? "text-white" : "text-secondary"
              } hover:scale-[1.75]`}
            />
            <VisuallyHidden>Bookmarks</VisuallyHidden>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
