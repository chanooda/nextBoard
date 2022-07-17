import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const BadgeButton = tw(motion.button)`
    fixed
    bottom-6
    right-6
    w-16
    h-16
    rounded-full
    bg-black
    text-4xl
    text-white
    xl:w-20
    xl:h-20
    xl:font-bold
    xl:right-12
    xl:bottom-12
`;
export const NavBtn = tw.button`
    absolute
    right-0
    bottom-1
    text-2xl
    cursor-pointer
    font-bold
`;

export const WriteBtn = tw.button<{ isPost: boolean }>`
    ${(p: any) => (p.isPost ? "absolute" : "static")}
    right-0
    top-4
`;
