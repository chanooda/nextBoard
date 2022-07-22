import React from "react";

function SetContainer({ children }: { children: React.ReactNode[] }) {
  return <div className="flex flex-col w-full gap-1 mb-4">{children}</div>;
}

export default SetContainer;
