import { IBoard } from "../../interfaces/Props/data/dataInterface";

function Board({ board }: { board: IBoard }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
        </tr>
        <tr>
          <th>제목</th>
        </tr>
        <tr>
          <th>조회수</th>
        </tr>
        <tr>
          <th>날짜</th>
        </tr>
      </thead>
      {board.posts.map((post) => {
        return (
          <tr key={board.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.view}</td>
            <td>{post.createdAt}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Board;
