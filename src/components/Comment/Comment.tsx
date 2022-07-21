import { IPostProps } from "../../interfaces/Props/pages/PageInterface";
import CommentForm from "../Form/CommentForm";
import CommentList from "./CommentList";

function Comment({ post }: IPostProps) {
  return (
    <>
      <CommentForm post={post} />
      <CommentList post={post} />
    </>
  );
}

export default Comment;
