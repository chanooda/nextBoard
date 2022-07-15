import { useState } from "react";

import { Board, BoardList } from "../components/Board";
import BoardForm from "../components/BoardForm";
import { AddBadgeButton } from "../components/Parts";
import { Container } from "../components/styled-components/Home";
import { Overlay } from "../components/styled-components/parts";
import { IHomeProps } from "../interfaces/PageInterface";
import { getBoards } from "../libs/client/boardApi";

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
