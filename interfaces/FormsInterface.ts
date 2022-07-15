export interface IBoardForm {
  boardName: string;
}

export interface ISendDataState {
  error?: IError;
  data?: object;
  loading: boolean;
}

export type UseMutationResult = [(data: any) => void, ISendDataState];

export interface IError {
  message: string;
  success: boolean;
}
