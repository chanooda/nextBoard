import { Dispatch, useState } from "react";

// components
import { AddBadgeButton } from "../components/Button/Buttons";

// styled-components
import { Overlay } from "../components/styled-components/components/form/form.style";
import { IHomeProps } from "../interfaces/Props/pages/PageInterface";
// libs
import { getBoards } from "../libs/client/api/getData";
import Modal from "../components/Modal/Modal";
import BoardFormTest from "../components/Form/BoardFromTest";
import BoardList from "../components/Board/BoardList";
import Header from "../components/layout/Header";
import { changeTitle } from "../feature/headerReducer";
import { IHeaderState } from "../interfaces/Reducer/ReducerInterface";
import { connect, useDispatch } from "react-redux";

const Home = ({ boards }: IHomeProps) => {
  const [onForm, setOnForm] = useState(false);
  const dispatch = useDispatch();

  dispatch(changeHeader());
  const onClick = () => {
    setOnForm(true);
  };
  const onOverlayClick = () => {
    setOnForm(false);
  };

  return (
    <>
      <Header />
      {/* 게시판 목록 */}
      <BoardList boards={boards} />
      {/* 게시판 추가 하는 버튼 폼 */}
      <AddBadgeButton onClick={onClick} />
      {/* 게시판 추가 버튼 클릭시 나올 modal */}
      {onForm ? (
        <>
          <Overlay onClick={onOverlayClick} />
          <Modal>
            <BoardFormTest />
          </Modal>
        </>
      ) : null}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    changeHeader: (title: string) => {
      dispatch(changeTitle({ title }));
    },
  };
};

export default Home;
