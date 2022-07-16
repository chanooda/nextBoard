import { PropsWithChildren } from "react";
import { BoardListContainer } from "../styled-components/components/board/BoardList.style";

export default function BoardList({ children }: PropsWithChildren) {
  return <BoardListContainer>{children}</BoardListContainer>;
}
