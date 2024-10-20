import React from "react";

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <div className="sr-only">{children}</div>;
};

export default VisuallyHidden;
