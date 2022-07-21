import { useState } from "react";
//interface
import { IModalForm } from "../../interfaces/FormInput/formInputInterface";
import { IPostProps } from "../../interfaces/Props/pages/PageInterface";
// custom hook
import { useSendData } from "../../libs/client/hook/useData";
// Component
import { DeleteButton, WritePostButton } from "../Button/Buttons";
import CommentModalForm from "../Form/CommentModalForm";
// Styled Component
import { Overlay } from "../styled-components/components/form/form.style";

function CommentList({ post }: IPostProps) {
  // fetch용 custom Hook 불러오기
  const [sendData, { loading, error, data }] = useSendData("/api/comment", "DELETE");

  // modal 용 State
  const [modalForm, setModalForm] = useState<IModalForm>({
    index: 0,
    modal: false,
    method: "PUT" || "DELETE",
  });

  return (
    <>
      <div className="w-full py-6 mt-6 bg-white">
        <ul>
          {post.comments.length !== 0 ? (
            post.comments.map((comment, index) => (
              <li key={comment.id} className="flex justify-between">
                <pre>{comment.content}</pre>
                <div>
                  <DeleteButton
                    onClick={() => {
                      setModalForm({
                        index,
                        modal: true,
                        method: "DELETE",
                      });
                    }}
                  />
                  <WritePostButton
                    onClick={() => {
                      setModalForm({
                        index,
                        modal: true,
                        method: "PUT",
                      });
                    }}
                    ispost={true}
                  />
                </div>
              </li>
            ))
          ) : (
            <li>등록된 댓글이 없습니다.</li>
          )}
        </ul>
      </div>
      {modalForm.modal ? (
        <>
          <CommentModalForm comment={post.comments[modalForm.index]} method={modalForm.method} />
          <Overlay
            onClick={() => {
              setModalForm((prev) => {
                return { ...prev, modal: false };
              });
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default CommentList;
