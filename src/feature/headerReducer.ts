import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeaderState } from "../interfaces/Reducer/ReducerInterface";

const initialState = { title: "" } as IHeaderState;

export const counterSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeTitle: (state: IHeaderState, action: PayloadAction<IHeaderState>) => {
      state.title = action.payload.title;
      return state;
    },
  },
});

export const { changeTitle } = counterSlice.actions;
