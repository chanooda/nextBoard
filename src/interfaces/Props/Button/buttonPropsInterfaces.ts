export interface ButtonProps {
  onClick: (modal: boolean, index: number) => void;
}

export interface WriterButton {
  onClick?: () => void;
}
