import { useState } from "react";

import { Board } from "../components/Board/Board";
import BoardForm from "../components/Form/BoardForm";
import { AddBadgeButton } from "../components/Button/Buttons";
import { Container } from "../components/styled-components/pages/Home.style";
import { Overlay } from "../components/styled-components/components/form/form.style";
import { IHomeProps } from "../interfaces/Props/pages/PageInterface";

import BoardList from "../components/Board/BoardList";
import { getBoards } from "../libs/client/api/get";

const Home = ({ boards }: IHomeProps) => {
  const [onForm, setOnForm] = useState(false);

  const onClick = () => {
    setOnForm(true);
  };
  const onOverlayClick = () => {
    setOnForm(false);
  };

  return (
    <Container>
      {/* 게시판 목록 */}
      <BoardList>
        {boards.map((board) => (
          <Board write={false} key={board.id} board={board}></Board>
        ))}
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
  );
};

export const getServerSideProps = async () => {
  return { props: { boards: await getBoards() } };
};

export default Home;
