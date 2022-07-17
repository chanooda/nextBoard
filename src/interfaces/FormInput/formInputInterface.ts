export interface IBoardForm {
  boardName: string;
}

export interface IPostForm {
  title: string;
  content: string;
  password?: string;
}

export interface IDeleteForm {
  password: string;
}
