import React, { PropsWithChildren } from "react";

function Form({
  children,
  onSubmit,
}: {
  children: React.ReactNode[] | React.ReactNode;
  onSubmit: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="text-black">
      {children}
    </form>
  );
}

export default Form;
