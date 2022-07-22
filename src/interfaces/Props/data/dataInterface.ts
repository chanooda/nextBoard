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
  comments: IComment[];
}

export interface IComment {
  id: number;
  content: string;
  password: string;
  guest: boolean;
  createdAt: string;
  updatedAt: string;
  userId?: number;
  postId: number;
}

export interface IBoard {
  id: number;
  name: string;
  posts: IPost[];
}
