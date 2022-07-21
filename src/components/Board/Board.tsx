import { useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
// Interface
import { IBoardProps } from "../../interfaces/Props/pages/PageInterface";
import { formatDateDiff } from "../../libs/client/util/util";
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
          <div className="relative flex items-center justify-between pb-4 overflow-hidden border-b-2 border-white">
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
          <div className="flex  py-2 border-b border-[#5e5f61]">
            <span className="w-[30px] text-center">No</span>
            <span>제목</span>
            <div className="w-[130px] hidden justify-between sm:flex">
              <span className="w-[50px]">조회수</span>
              <span className="inline-block w-[69px] text-center">날짜</span>
            </div>
          </div>
        </BoardHeader>
        <PostList>
          {board?.posts.length === 0 ? (
            <li>글이 없습니다.</li>
          ) : (
            board?.posts.slice(0, 10).map((post) => (
              <Link href={`/board/${post.boardId}/post/${post.id}`} key={post.id}>
                <a>
                  <PostListContent>
                    <div className="box-border flex ">
                      <span className="w-[30px] text-center mr-2">{post.id}</span>
                      <p className="block max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {post.title}
                      </p>
                    </div>
                    <div className="hidden justify-between w-[120px] sm:flex">
                      <span className="text-center w-[20px]">{post.view}</span>
                      <span className="hidden sm:block">{formatDateDiff(post.createdAt)}</span>
                    </div>
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
