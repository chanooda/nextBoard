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

export function WritePostButton({ onClick, isPost }: WriterButton) {
  return (
    <WriteBtn onClick={onClick} inPost={isPost}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
        </svg>
      </span>
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
