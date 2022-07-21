import React, { PropsWithChildren } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

function Form({
  children,
  onSubmit,
}: {
  children: React.ReactNode[] | React.ReactNode;
  onSubmit: () => void;
}) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
