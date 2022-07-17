import { IPost } from "../pages/PageInterface";

export interface IPostFormProps {
  boardId: number;
  edit?: boolean;
  post?: IPost;
}
