import tw from "tailwind-styled-components";

export const BoardContainer = tw.div`
  text-white
    w-full
    min-h-[400px]
    py-2
    px-6
    bg-[#242a2e]
    shadow-2xl
    rounded-lg
`;
export const BoardHeader = tw.div`
   
`;

export const BoardTitle = tw.h2`
    text-lg
    font-bold
    cursor-pointer
    text-center
`;

export const PostList = tw.ul`
    flex
    flex-col
`;

export const PostListContent = tw.li`
    flex
    justify-between
    text-base
    text-white
    py-1
    border-[#5e5f61]
    border-b
`;
