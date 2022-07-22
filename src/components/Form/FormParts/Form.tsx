import React from "react";
import { ErrorMessage } from "../../Error/Error";

function Form({
  children,
  onSubmit,
  title,
  error,
}: {
  children: React.ReactNode[] | React.ReactNode;
  onSubmit: () => void;
  title?: string;
  error?: string;
}) {
  return (
    <form onSubmit={onSubmit} className="w-full text-black">
      <h2 className="mb-4 text-3xl text-center">{title}</h2>
      <ErrorMessage text={error} />
      {children}
    </form>
  );
}

export default Form;
