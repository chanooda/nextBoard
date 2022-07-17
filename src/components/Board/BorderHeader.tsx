import { NextArrowButton } from "../Button/Buttons";
import { BoardHeader, BoardTitle } from "../styled-components/components/board/Board.style";

interface BorderHeader {
  title: string;
}

export default function BorderHeader({ title }: BorderHeader) {
  return (
    <BoardHeader>
      <BoardTitle>{title}</BoardTitle>
      <NextArrowButton />
    </BoardHeader>
  );
}
