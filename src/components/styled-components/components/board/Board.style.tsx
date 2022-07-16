import tw from "tailwind-styled-components";

export const BoardContainer = tw.div`
    w-full
    min-h-[256px]
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
