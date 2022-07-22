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

export function WritePostButton({ onClick }: WriterButton) {
  return (
    <button className="block text-4xl" onClick={onClick}>
      <span>+</span>
    </button>
  );
}

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <button onClick={() => onClick(false, 0)} className="block text-3xl">
      <span>x</span>
    </button>
  );
}

export function BackButton() {
  return <button>{`<`}</button>;
}
