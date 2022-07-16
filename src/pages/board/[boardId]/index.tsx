import { GetServerSideProps } from "next";
import { useState } from "react";
//Components
import { Board } from "../../../components/Board/Board";
import PostForm from "../../../components/Form/PostForm";
import { Overlay } from "../../../components/styled-components/components/form/form.style";

//Interfaces
import { IBoardProps } from "../../../interfaces/Props/pages/PageInterface";
import { getBoard } from "../../../libs/client/api/get";

export default function BoardHome({ board }: IBoardProps) {
  const [onForm, setOnForm] = useState(false);

  const onClick = () => {
    setOnForm(true);
  };
  const onOverlayClick = () => {
    setOnForm(false);
  };

  return (
    <>
      <Board board={board} write={true} onClick={onClick} />
      {onForm ? (
        <>
          <Overlay onClick={onOverlayClick} />
          <PostForm boardId={board.id} />
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { boardId } = query;

  return { props: { board: await getBoard(boardId as string) } };
};
