import Link from "next/link";
import { IBoard } from "../../interfaces/Props/data/dataInterface";
import { NextArrowButton, WritePostButton } from "../Button/Buttons";
import PostList from "./PostList";

function Board({ board, main, onClick }: { board: IBoard; main?: boolean; onClick?: () => void }) {
  return (
    <div className="flex flex-col justify-center w-full p-4 shadow-2xl">
      <div className="flex items-center justify-between py-1 ">
        <h2 className="text-2xl text-center">{board.name}</h2>
        {main ? (
          <WritePostButton onClick={onClick} />
        ) : (
          <Link href={`board/${board.id}`}>
            <a>
              <NextArrowButton />
            </a>
          </Link>
        )}
      </div>
      <PostList posts={board.posts} main={main} />
    </div>
  );
}

export default Board;
