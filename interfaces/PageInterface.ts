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
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  view: string;
  password: string;
  guest: boolean;
  createdAt: string;
  updatedAt: string;
  userId?: string;
  boardId: number;
  comments: array;
}

export interface IPostProps {
  post: IPost;
}
