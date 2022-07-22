import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IComment } from "../../interfaces/Props/data/dataInterface";
import { useSendData } from "../../libs/client/hook/useData";
import { formatDateDiff } from "../../libs/client/util/util";
import { DeleteButton, WritePostButton } from "../Button/Buttons";
import CommentEditForm from "../Form/CommentEditForm";
import DeleteForm from "../Form/DeleteForm";
import Form from "../Form/FormParts/Form";
import PasswordSet from "../Form/FormParts/PasswordSet";
import Submit from "../Form/FormParts/Submit";
import TextAreaSet from "../Form/FormParts/TextArea";
import Modal from "../Modal/Modal";
import { Overlay } from "../styled-components/components/form/form.style";
import CommentDetail from "./CommentDetail";

function CommentList({ comments, postId }: { comments: IComment[]; postId: number }) {
  const [onDelete, setOnDelete] = useState({ modal: false, index: 0 });
  const [onEdit, setOnEdit] = useState({ modal: false, index: 0 });

  const optionedComments = comments.reverse();

  const onEditClick = (modal: boolean, index: number) => {
    setOnEdit({
      index,
      modal,
    });
  };

  const onDeleteClick = (modal: boolean, index: number) => {
    setOnDelete({
      modal,
      index,
    });
  };

  return (
    <>
      <div>
        <ul>
          {optionedComments.map((comment, index) => (
            <li key={comment.id} className="flex flex-col py-2 border-b border-black">
              {onEdit.modal ? (
                <div className="flex flex-col items-end w-full">
                  <DeleteButton onClick={onEditClick} />
                  <CommentEditForm postId={comment.postId} comment={comment} />
                </div>
              ) : (
                <CommentDetail
                  comment={comment}
                  index={index}
                  onDeleteClick={onDeleteClick}
                  onEditClick={onEditClick}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      {onDelete.modal ? (
        <>
          <Overlay onClick={() => onDeleteClick(false, 0)} />
          <Modal>
            <DeleteForm
              postId={postId}
              comment={optionedComments[onDelete.index]}
              title={"댓글 삭제"}
            />
          </Modal>
        </>
      ) : null}
    </>
  );
}

export default CommentList;
