import tw from "tailwind-styled-components";

export const BoardListContainer = tw.ul`
    flex
    flex-col
    gap-8
`;

export const BoardContainer = tw.div`
    w-full
    h-64
    py-2
    px-6
    bg-white
    shadow-2xl
`;

export const BoardHeader = tw.div`
    pb-1
    flex
    justify-between
    items-center
    border-b
    border-black
`;

export const BoardTitle = tw.h2`
    text-lg
    font-bold
    cursor-pointer
`;

export const PostList = tw.ul`
    mt-2
    flex
    flex-col
`;

export const PostListContent = tw.li`
    text-lg
`;
