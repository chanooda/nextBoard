import { IErrorText } from "../../interfaces/Error/errorInterface";

export function ErrorMessage({ text }: IErrorText) {
  return <p className="text-sm text-red-500">{text}</p>;
}
