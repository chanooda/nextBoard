export const getBoards = async () => {
  const response = await fetch("http://localhost:3000/api/board");
  const data = await response.json();
  return data.boards;
};

export const getBoard = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/board?id=${id}`);
  const data = await response.json();
  return data.boards[0];
};

export const getPost = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/post?id=${id}`);
  const data = await response.json();
  return data.posts[0];
};
