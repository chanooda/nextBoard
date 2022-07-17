import { useState } from "react";

// components
import { Board } from "../components/Board/Board";
import BoardForm from "../components/Form/BoardForm";
import { AddBadgeButton } from "../components/Button/Buttons";
import BoardList from "../components/Board/BoardList";
import Header from "../components/layout/Header";
// styled-components
import { Container } from "../components/styled-components/pages/Home.style";
import { Overlay } from "../components/styled-components/components/form/form.style";
import { IHomeProps } from "../interfaces/Props/pages/PageInterface";
// libs
import { getBoards } from "../libs/client/api/getData";
import Head from "next/head";

const Home = ({ boards }: IHomeProps) => {
  const [onForm, setOnForm] = useState(false);

  const onClick = () => {
    setOnForm(true);
  };
  const onOverlayClick = () => {
    setOnForm(false);
  };

  return (
    <>
      <Header title="Home" />
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        {/* 게시판 목록 */}
        <BoardList>
          {boards.length !== 0 ? (
            boards.map((board) => <Board write={false} key={board.id} board={board}></Board>)
          ) : (
            <p className="text-center text-white">게시판이 없습니다.</p>
          )}
        </BoardList>
        {/* 게시판 추가 하는 버튼 폼 */}

        {onForm ? (
          <>
            <Overlay onClick={onOverlayClick} />
            <BoardForm />
          </>
        ) : null}

        <AddBadgeButton onClick={onClick} />
      </Container>
    </>
  );
};

export const getServerSideProps = async () => {
  return { props: { boards: await getBoards() } };
};

export default Home;
