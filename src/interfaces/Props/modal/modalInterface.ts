export interface ICommentModalProp {
  comment: {
    content: string;
    password: string;
    postId: number;
    id: number;
  };
  method: "DELETE" | "PUT";
}
