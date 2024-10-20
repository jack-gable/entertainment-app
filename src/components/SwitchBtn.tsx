import React, { Dispatch } from "react";

const SwitchBtn = ({
  display,
  setDisplay,
}: {
  display?: boolean;
  setDisplay?: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = setDisplay && (() => setDisplay(!display));
  return (
    <div className="flex w-[150px] h-10">
      <button
        onClick={handleClick}
        className={`bg-primary border border-slate-700 px-3 py-2 rounded-l-lg text-xs w-1/2 hover:text-accent ${
          display ? "bg-slate-700 text-accent" : ""
        }`}
      >
        MOVIES
      </button>
      <button
        onClick={handleClick}
        className={`bg-primary border border-slate-700 px-3 py-2 rounded-r-lg text-xs w-1/2 hover:text-accent ${
          display ? "" : "bg-slate-700 text-accent"
        }`}
      >
        TV
      </button>
    </div>
  );
};

export default SwitchBtn;
