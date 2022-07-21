import { IPost } from "../data/dataInterface";

export interface IPostFormProps {
  boardId: number;
  edit?: boolean;
  post?: IPost;
}
