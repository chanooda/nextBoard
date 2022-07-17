import { GetServerSideProps } from "next";
import { useState } from "react";
// components
import { DeleteButton, WritePostButton } from "../../../../components/Button/Buttons";
import DeleteForm from "../../../../components/Form/DeleteForm";
import PostForm from "../../../../components/Form/PostForm";
import Header from "../../../../components/layout/Header";
// styled-components
import { Overlay } from "../../../../components/styled-components/components/form/form.style";
// interface
import { IPostProps } from "../../../../interfaces/Props/pages/PageInterface";
// libs
import { getPost } from "../../../../libs/client/api/getData";

export default function Post({ post }: IPostProps) {
  const [onForm, setOnForm] = useState(false);
  const [onDeleteForm, setOnDeleteForm] = useState(false);

  const onClick = () => {
    setOnForm(true);
  };
  const onOverlayClick = () => {
    setOnForm(false);
    setOnDeleteForm(false);
  };
  const onDeleteClick = () => {
    setOnDeleteForm(true);
  };
  return (
    <>
      <Header back={true} boardId={post.boardId} title={post.title} />
      <div className="w-full min-h-[500px] px-4 bg-white">
        <div className="py-2">
          <h2 className="py-2">{post.title}</h2>
          <div className="flex justify-end gap-4 border-black border-y">
            <WritePostButton isPost={false} onClick={onClick} />
            <DeleteButton onClick={onDeleteClick} />
          </div>
        </div>
        <div className="pt-3 pb-6">
          <p>{post.content}</p>
        </div>
      </div>
      {onForm ? (
        <>
          <Overlay onClick={onOverlayClick} />
          <PostForm boardId={post.boardId} edit={true} post={post} />
        </>
      ) : onDeleteForm ? (
        <>
          <Overlay onClick={onOverlayClick} />
          <DeleteForm />
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { postId } = query;

  const data = await getPost(Number(postId));

  return { props: { post: data } };
};
