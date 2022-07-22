import Link from "next/link";
import { connect } from "react-redux";
//interface
import { IHeaderProps } from "../../interfaces/Props/layout/layoutInterface";
import { IHeaderState } from "../../interfaces/Reducer/ReducerInterface";
// components
import { BackButton } from "../Button/Buttons";

function Header({ back, boardId, title }: IHeaderProps) {
  return (
    <header className="relative flex items-center justify-center w-full py-2 mb-6 text-xl font-bold text-white bg-black">
      {back ? (
        <Link href={boardId ? `/board/${boardId}` : "/"}>
          <a className="absolute text-2xl text-white left-2">
            <BackButton />
          </a>
        </Link>
      ) : null}
      <h1 className="">{title}</h1>
    </header>
  );
}

const mapStateToProps = (state: IHeaderState) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, null)(Header);
