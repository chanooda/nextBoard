import { useState } from "react";
import { IBoardForm } from "../../interfaces/FormsInterface";
import { ISendDataState, UseMutationResult } from "../../interfaces/LibInterfaces";

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

// POST 형식 Custom Hook
export const useSendData = (url: string): UseMutationResult => {
  const [state, setState] = useState<ISendDataState>({
    error: undefined,
    data: undefined,
    loading: false,
  });
  const sendData = async (data: IBoardForm) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });
      if (response.redirected) window.location.href = "/";
      else if (response.status === 200) {
        const data = await response.json();
        window.location.href = `/board/${data.boardId}/post/${data.postId}`;
      } else if (response.status === 500) {
        const data = await response.json();
        setState((prev) => ({ ...prev, error: data }));
      }
    } catch (error: any) {
      setState((prev) => ({ ...prev, error }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };
  return [sendData, { ...state }];
};
