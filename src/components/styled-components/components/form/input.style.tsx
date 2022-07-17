import tw from "tailwind-styled-components";

export const Form = tw.form`
    flex 
    items-center 
    justify-start
`;

export const FormContainer = tw.div`
    flex 
    flex-col 
    w-full
`;

export const FormTitle = tw.h2` 
    mb-4 
    text-xl 
    font-bold 
    text-center
`;

export const TextInput = tw.input`
    w-full 
    p-1 
    border 
    border-black 
    rounded-md
`;

export const Label = tw.label`
    mb-1
`;

export const TextArea = tw.textarea`
    w-full 
    h-[400px] 
    p-1 
    border 
  border-black 
    rounded-md 
    resize-none
`;

export const SubmitButton = tw.input`first-letter:
    self-center 
    w-24 
    p-1 
    mt-8 
  text-white 
  bg-black 
    rounded-md 
    cursor-pointer
`;
