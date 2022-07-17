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

export function Board({ board, write, onClick, ispost }: IBoardProps) {
  return (
    <>
      <BoardContainer>
        <BoardHeader>
          <div className="relative flex justify-center py-2">
            <BoardTitle>{board?.name}</BoardTitle>
            {!write ? (
              <>
                <Link href={`/board/${board?.id}`}>
                  <a>
                    <NextArrowButton />
                  </a>
                </Link>
              </>
            ) : (
              <WritePostButton ispost={ispost} onClick={onClick ? onClick : () => {}} />
            )}
          </div>
          <div className="flex justify-between py-1 border-black border-y">
            <span>제목</span>
            <span>조회수</span>
          </div>
        </BoardHeader>

        <PostList>
          {board?.posts.length === 0 ? (
            <li>글이 없습니다.</li>
          ) : (
            board?.posts.slice(0, 6).map((post) => (
              <Link href={`/board/${post.boardId}/post/${post.id}`} key={post.id}>
                <a>
                  <PostListContent>
                    <p className="text-ellipsis">{post.title}</p>
                    <span>{post.view}</span>
                  </PostListContent>
                </a>
              </Link>
            ))
          )}
        </PostList>
      </BoardContainer>
    </>
  );
}
