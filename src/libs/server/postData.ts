const dev = process.env.NODE_ENV !== "production";
const url = dev ? "http://localhost:3000/api/" : "https://next-board.herokuapp.com/api/";

export const putView = async (id: number) => {
  const response = await fetch(`${url}view?id=${id}`, {
    method: "PUT",
  });
  const data = await response.json();

  return data;
};
