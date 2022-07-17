import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
//Components
import { Board } from "../../../components/Board/Board";
import PostForm from "../../../components/Form/PostForm";
import Header from "../../../components/layout/Header";
import { Overlay } from "../../../components/styled-components/components/form/form.style";

//Interfaces
import { IBoardProps } from "../../../interfaces/Props/pages/PageInterface";
import { getBoard } from "../../../libs/client/api/getData";

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
      <Head>
        <title>{board.name}</title>
      </Head>
      <Header back={true} title={board.name} />
      <Board board={board} write={false} onClick={onClick} />
      {onForm ? (
        <>
          <Overlay onClick={onOverlayClick} />
          <PostForm boardId={Number(board.id)} />
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { boardId } = query;

  return { props: { board: await getBoard(Number(boardId)) } };
};
