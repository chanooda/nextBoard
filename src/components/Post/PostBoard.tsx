import { useState } from "react";
import { IPost } from "../../interfaces/Props/data/dataInterface";
import { formatDateDiff } from "../../libs/client/util/util";
import { DeleteButton, WritePostButton } from "../Button/Buttons";

function PostBoard({
  post,
  onDeleteClick,
  onEditClick,
}: {
  post: IPost;
  onDeleteClick: () => void;
  onEditClick: () => void;
}) {
  return (
    <div className="w-full">
      <h2 className="w-full pb-2 overflow-hidden text-lg overflow-ellipsis whitespace-nowrap">
        {post.title}
      </h2>
      <div className="flex items-center justify-between border-black border-y-2">
        <div className="flex items-center gap-3">
          <span>조회수 : {post.view}</span>
          <span>{`생성일 : ${formatDateDiff(post.createdAt)}`}</span>
        </div>
        <div className="flex gap-2">
          <WritePostButton onClick={onEditClick} />
          <DeleteButton onClick={onDeleteClick} />
        </div>
      </div>
      <div className="py-4 border-b-2 border-black">
        <pre>{post.content}</pre>
      </div>
    </div>
  );
}

export default PostBoard;
