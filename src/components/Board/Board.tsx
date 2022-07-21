import Link from "next/link";
import { IBoard } from "../../interfaces/Props/data/dataInterface";
import { NextArrowButton } from "../Button/Buttons";
import PostList from "./PostList";

function Board({ board }: { board: IBoard }) {
  return (
    <div className="w-full flex justify-center flex-col p-4 shadow-2xl">
      <div className="flex justify-between items-center py-1 ">
        <h2 className="text-2xl text-center">{board.name}</h2>
        <Link href={`board/${board.id}`}>
          <a>
            <NextArrowButton />
          </a>
        </Link>
      </div>
      <PostList posts={board.posts} />
    </div>
  );
}

export default Board;
