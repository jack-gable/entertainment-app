import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full p-8">
      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-accent"></div>
    </div>
  );
};

export default LoadingSpinner;
