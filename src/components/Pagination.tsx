import React, { useEffect } from "react";
import Icon from "./Icon";

const Pagination = ({
  page,
  setPage,
  total_pages,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total_pages: number;
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  return (
    <div className="flex justify-between items-center gap-2 w-full p-8">
      <button
        type="button"
        className={`flex gap-1 items-center ${
          page === 1 ? "text-slate-500 cursor-not-allowed" : ""
        }`}
        onClick={() => setPage(page - 1)}
      >
        <Icon id="chevronLeft" size={18} />
        Previous page
      </button>
      <div className="text-sm flex gap-2 items-center">
        <span className="font-bold">{page}</span>
        <span className="text-secondary">/</span>
        <span className="font-bold">
          {total_pages >= 1000 ? "500" : total_pages}
        </span>
      </div>
      <button
        type="button"
        className={`flex gap-1 items-center ${
          page === total_pages ? "text-slate-500 cursor-not-allowed" : ""
        }`}
        onClick={() => setPage(page + 1)}
      >
        Next page <Icon id="chevronRight" size={18} />
      </button>
    </div>
  );
};

export default Pagination;
