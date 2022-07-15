import { BadgeButton, NavBtn } from "./styled-components/parts";
import { IAddBadgeButton, IErrorText } from "../interfaces/PartsInterface";

export function AddBadgeButton({ onClick }: IAddBadgeButton) {
  return <BadgeButton onClick={onClick}>+</BadgeButton>;
}

export function NextArrowButton() {
  return <NavBtn>{`>`}</NavBtn>;
}

export function ErrorMessage({ text }: IErrorText) {
  return <p className="text-sm text-red-500">{text}</p>;
}
