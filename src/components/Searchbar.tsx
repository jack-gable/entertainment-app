"use client";
import { usePathname } from "next/navigation";
import React, { Dispatch, useState } from "react";
import SwitchBtn from "./SwitchBtn";
import Icon from "./Icon";
import VisuallyHidden from "./VisuallyHidden";
import { useRouter } from "next/navigation";

const Searchbar = ({
  display,
  setDisplay,
  placeholder,
  searchPath,
  className,
  children,
}: {
  display?: boolean;
  setDisplay?: Dispatch<React.SetStateAction<boolean>>;
  placeholder?: string;
  searchPath?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.length === 0) {
      return;
    } else {
      router.push(`${searchPath}${query.trim()}?page=1`);
      setQuery("");
    }
  };

  return (
    <div
      className={`w-full flex flex-col-reverse items-start sm:flex-row justify-between sm:items-center pt-6 ${
        pathname === "/" ? "sm:pr-6" : ""
      } gap-3 ${className}`}
    >
      {pathname === "/" ? (
        <SwitchBtn display={display} setDisplay={setDisplay} />
      ) : (
        <>{children}</>
      )}
      <form
        onSubmit={submitHandler}
        className="h-10 bg-primary border border-slate-700 px-3 py-1 rounded-lg flex items-center gap-2"
      >
        <label htmlFor="search" className="">
          <input
            id="search"
            type="text"
            placeholder={`${placeholder}...`}
            className="text-sm bg-primary w-full outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button type="submit" className="text-white hover:text-accent p-1">
          <Icon id="search" size={18} />
          <VisuallyHidden>{placeholder}</VisuallyHidden>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
