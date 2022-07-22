import { IComment } from "../../interfaces/Props/data/dataInterface";
import { formatDateDiff } from "../../libs/client/util/util";
import { DeleteButton, WritePostButton } from "../Button/Buttons";

function CommentDetail({
  onEditClick,
  onDeleteClick,
  comment,
  index,
}: {
  comment: IComment;
  index: number;
  onEditClick: (modal: true, index: number) => void;
  onDeleteClick: (modal: true, index: number) => void;
}) {
  return (
    <>
      <span className="mb-2 text-xs">{formatDateDiff(comment.createdAt)}</span>
      <div className="flex justify-between">
        <pre className="w-9/10">{comment.content}</pre>
        <div className="flex w-1/10">
          <WritePostButton
            onClick={() => {
              onEditClick(true, index);
            }}
          />
          <DeleteButton onClick={() => onDeleteClick(true, 0)} />
        </div>
      </div>
    </>
  );
}

export default CommentDetail;
