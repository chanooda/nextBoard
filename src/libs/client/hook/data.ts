import { useState } from "react";
//interfaces
import { IBoardForm } from "../../../interfaces/FormInput/formInputInterface";
import { ISendDataState, UseMutationResult } from "../../../interfaces/hook/hookInterface";

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
