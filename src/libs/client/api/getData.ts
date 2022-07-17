export const getBoards = async () => {
  const response = await fetch(
    "https://nextboard-6d5snyfgu-hanrhfqkq-gmailcom.vercel.app/api/board"
  );
  const data = await response.json();
  return data.boards;
};

export const getBoard = async (id: number) => {
  const response = await fetch(
    `https://nextboard-6d5snyfgu-hanrhfqkq-gmailcom.vercel.app/api/board?id=${id}`
  );
  const data = await response.json();
  return data.boards[0];
};

export const getPost = async (id: number) => {
  const response = await fetch(
    `https://nextboard-6d5snyfgu-hanrhfqkq-gmailcom.vercel.app/api/post?id=${id}`
  );
  const data = await response.json();
  return data.posts[0];
};
