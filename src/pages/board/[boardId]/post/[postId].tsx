import { GetServerSideProps } from "next";
import { useState } from "react";
import { DeleteButton, WritePostButton } from "../../../../components/Button/Buttons";
import CommentList from "../../../../components/Comment/CommentList";
import CommentForm from "../../../../components/Form/CommendForm";
// components
import DeleteForm from "../../../../components/Form/DeleteForm";
import PostFormTest from "../../../../components/Form/PostFormTest";
import Modal from "../../../../components/Modal/Modal";
import PostBoard from "../../../../components/Post/PostBoard";
// styled-components
import { Overlay } from "../../../../components/styled-components/components/form/form.style";
// interface
import { IPostProps } from "../../../../interfaces/Props/pages/PageInterface";
// libs
import { getPost } from "../../../../libs/client/api/getData";
import { putView } from "../../../../libs/server/postData";
// custom Hook

export default function Post({ post }: IPostProps) {
  const [onDeleteForm, setOnDeleteForm] = useState(false);
  const [onEditForm, setOnEditForm] = useState(false);
  const onDeleteClick = () => {
    setOnDeleteForm(true);
  };
  const onEditClick = () => {
    setOnEditForm(true);
  };
  return (
    <>
      <PostBoard post={post} onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      <CommentForm postId={post.id} />
      <CommentList comments={post.comments} postId={post.id} />
      {onDeleteForm || onEditForm ? (
        <>
          <Overlay
            onClick={() => {
              setOnDeleteForm(false);
              setOnEditForm(false);
            }}
          />
          <Modal>
            {onEditForm ? (
              <PostFormTest boardId={post.boardId} post={post} />
            ) : (
              <DeleteForm postId={post.id} />
            )}
          </Modal>
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { postId } = query;

  // 조회수 증가
  await putView(Number(postId));
  // 포스트 데이터 가져오기
  const data = await getPost(Number(postId));

  return { props: { post: data } };
};
