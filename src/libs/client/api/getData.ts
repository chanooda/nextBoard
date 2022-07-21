const dev = process.env.NODE_ENV !== "production";
const url = dev ? "http://localhost:3000/api/" : "https://next-board.herokuapp.com/api/";

export const getBoards = async () => {
  const response = await fetch(url + "board");
  const data = await response.json();
  return data.boards;
};

export const getBoard = async (id: number) => {
  const response = await fetch(`${url}board?id=${id}`);
  const data = await response.json();
  return data.boards[0];
};

export const getPost = async (id: number) => {
  const response = await fetch(`${url}post?id=${id}`);
  const data = await response.json();
  return data.posts[0];
};

export const getComment = async (id: number) => {
  const response = await fetch(`${url}comment?id={id}`);
  const data = await response.json();
  return data;
};
