import Link from "next/link";
// Interface
import { IBoardProps } from "../../interfaces/Props/pages/PageInterface";
import { NextArrowButton, WritePostButton } from "../Button/Buttons";
//Components

// tailwind Styled Components
import {
  BoardContainer,
  BoardHeader,
  BoardTitle,
  PostList,
  PostListContent,
} from "../styled-components/components/board/Board.style";

export function Board({ board, write, onClick }: IBoardProps) {
  return (
    <>
      <BoardContainer>
        <BoardHeader>
          <BoardTitle>{board?.name}</BoardTitle>
          {!write ? (
            <Link href={`/board/${board?.id}`}>
              <a>
                <NextArrowButton />
              </a>
            </Link>
          ) : (
            <WritePostButton onClick={onClick ? onClick : () => {}} />
          )}
        </BoardHeader>

        <PostList>
          {board?.posts.slice(0, 6).map((post) => (
            <PostListContent key={post.id}>
              <Link href={`/board/${post.boardId}/post/${post.id}`}>
                <a className="block overflow-hidden w-ful h-7 text-ellipsis">{post.title}</a>
              </Link>
            </PostListContent>
          ))}
        </PostList>
      </BoardContainer>
    </>
  );
}
