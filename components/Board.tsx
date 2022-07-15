import Link from "next/link";
import { PropsWithChildren } from "react";
// Interface
import { IBoardProps } from "../interfaces/HomeInterface";
import { NextArrowButton } from "./Parts";
//Components

// tailwind Styled Components
import {
  BoardContainer,
  BoardHeader,
  BoardListContainer,
  BoardTitle,
  PostList,
  PostListContent,
} from "./styled-components/BoardStyle";

export function BoardList({ children }: PropsWithChildren) {
  return <BoardListContainer>{children}</BoardListContainer>;
}

export function Board({ board }: IBoardProps) {
  return (
    <BoardContainer>
      <Link href={`board/${board.id}`}>
        <BoardHeader>
          <BoardTitle>{board.name}</BoardTitle>
          <NextArrowButton />
        </BoardHeader>
      </Link>
      <PostList>
        {board.posts.slice(0, 6).map((post) => (
          <PostListContent key={post.id}>
            <Link href={`board/${post.boardId}/post/${post.id}`}>
              <a className="block overflow-hidden w-ful h-7 text-ellipsis">{post.title}</a>
            </Link>
          </PostListContent>
        ))}
      </PostList>
    </BoardContainer>
  );
}
