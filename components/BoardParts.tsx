import { NextArrowButton } from "./Parts";
import { BoardHeader, BoardTitle } from "./styled-components/BoardStyle";

interface BorderHeader {
  title: string;
}

export function BorderHeader({ title }: BorderHeader) {
  return (
    <BoardHeader>
      <BoardTitle>{title}</BoardTitle>
      <NextArrowButton />
    </BoardHeader>
  );
}
