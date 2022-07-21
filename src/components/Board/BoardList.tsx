import { IBoard } from "../../interfaces/Props/data/dataInterface";
import Board from "./Board";

function BoardList({ boards }: { boards: IBoard[] }) {
  return (
    <div>
      {boards.map((board) => (
        <Board board={board} key={board.id} />
      ))}
    </div>
  );
}

export default BoardList;
