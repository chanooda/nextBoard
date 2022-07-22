import { GetServerSideProps } from "next";
import { useState } from "react";

//Components
import Board from "../../../components/Board/Board";
import PostFormTest from "../../../components/Form/PostFormTest";
import Modal from "../../../components/Modal/Modal";
import { Overlay } from "../../../components/styled-components/components/form/form.style";

//Interfaces
import { IBoardProps } from "../../../interfaces/Props/pages/PageInterface";
import { getBoard } from "../../../libs/client/api/getData";

export default function BoardHome({ board }: IBoardProps) {
  const [onForm, setOnForm] = useState(false);

  const onClick = () => {
    setOnForm(true);
  };

  return (
    <>
      <Board board={board} main={true} onClick={onClick} />
      {onForm ? (
        <>
          <Overlay onClick={() => setOnForm(false)} />
          <Modal>
            <PostFormTest boardId={board.id} />
          </Modal>
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { boardId } = query;

  return { props: { board: await getBoard(Number(boardId)) } };
};
