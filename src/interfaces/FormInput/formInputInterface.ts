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

export interface IModalForm {
  index: number;
  modal: boolean;
  method: "PUT" | "DELETE";
}

export interface IWriteCommentForm {
  content: string;
  password: string;
}
