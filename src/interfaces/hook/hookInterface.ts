export interface ISendDataState {
  error?: IError;
  data?: any;
  loading: boolean;
}

export type UseMutationResult = [(data: any) => void, ISendDataState];

export interface IError {
  message: string;
  success: boolean;
}
