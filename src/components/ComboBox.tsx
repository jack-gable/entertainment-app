"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GenreList as GenreListMovie } from "@/lib/GenreList";
import { GenreList as GenreListTV } from "@/lib/GenreListTV";
import Icon from "./Icon";
import { Genre } from "@/utils/types";

const ComboBox = ({
  propType,
  setGenre,
}: {
  propType?: string;
  setGenre: React.Dispatch<React.SetStateAction<Genre | null>>;
}) => {
  const genresData = propType === "movie" ? GenreListMovie : GenreListTV;

  const [selectedGenre, setSelectedGenre] = useState(genresData[0]);

  useEffect(() => {
    setGenre(selectedGenre);
  }, [selectedGenre, setGenre]);

  return (
    <Menu>
      <MenuButton as={Fragment}>
        {({ active }) => (
          <div
            className={`h-10 bg-primary border border-slate-700 px-3 py-1 rounded-lg relative text-sm w-[197px] flex justify-between items-center cursor-pointer ${
              active && "bg-secondary"
            }`}
          >
            <span className={`text-gray-400 ${active && "text-gray-50"}`}>
              Select Genre
            </span>
            <Icon id="chevronsUpDown" size={20} />
          </div>
        )}
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="bg-primary border border-slate-700 rounded-lg w-[197px] p-2 absolute z-10 empty:invisible"
      >
        {genresData.map((item) => (
          <MenuItem key={item.id} as={Fragment}>
            {({ focus }) => (
              <div
                className={`text-sm p-1 cursor-pointer hover:bg-secondary rounded-md ${
                  focus && "bg-secondary"
                }`}
                onClick={() => setSelectedGenre(item)}
              >
                {item.name}
              </div>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ComboBox;
