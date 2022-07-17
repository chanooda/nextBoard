export interface IPost {
  boardId: number;
  content: string;
  createdAt: string;
  guest: boolean;
  id: number;
  password?: string;
  title: string;
  updatedAt: string;
  userId?: number;
  view: number;
}

export interface IBoard {
  id: string;
  name: string;
  posts: IPost[];
}
export interface IHomeProps {
  boards: IBoard[];
}
export interface IBoardProps {
  board: IBoard;
  write: boolean;
  onClick?: () => void;
  ispost?: boolean;
}

export interface IPostProps {
  post: IPost;
}
