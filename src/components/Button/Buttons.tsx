// styled-component
import { BadgeButton, NavBtn, WriteBtn } from "../styled-components/components/button/button.style";
// interface
import { ButtonProps, WriterButton } from "../../interfaces/Props/Button/buttonPropsInterfaces";

export function AddBadgeButton({ onClick }: ButtonProps) {
  return <BadgeButton onClick={onClick}>+</BadgeButton>;
}

export function NextArrowButton() {
  return <NavBtn>{`>`}</NavBtn>;
}

export function WritePostButton({ onClick, ispost }: WriterButton) {
  return (
    <WriteBtn onClick={onClick} ispost={ispost}>
      +
    </WriteBtn>
  );
}

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="text-xl font-bold">
      X
    </button>
  );
}

export function BackButton() {
  return <button>{`<`}</button>;
}
