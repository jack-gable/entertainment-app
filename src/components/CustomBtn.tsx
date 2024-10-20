import React from "react";

const CustomBtn = ({
  disabled,
  onClick,
  classname,
  children,
}: {
  disabled?: boolean;
  classname?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        disabled
          ? `cursor-not-allowed px-4 py-2 rounded-xl bg-slate-700 ${classname}`
          : `px-4 py-2 rounded-xl bg-secondary hover:bg-accent ${classname}`
      }
    >
      {children}
    </button>
  );
};

export default CustomBtn;
