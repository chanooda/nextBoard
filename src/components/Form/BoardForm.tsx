import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IBoardForm } from "../../interfaces/FormInput/formInputInterface";
import { ErrorMessage } from "../Error/Error";
import { useSendData } from "../../libs/client/hook/useData";

function BoardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoardForm>();

  const [sendData, { loading, data, error }] = useSendData("/api/board", "POST");

  const onValid: SubmitHandler<IBoardForm> = (formData) => {
    if (loading) return;
    sendData(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.1 }}
      className="fixed z-50 w-[calc(100%_-_32px)] px-10 py-2 bg-white shadow-2xl rounded-xl max-w-[500px] top-1/2 left-1/2 transform: -translate-x-1/2 -translate-y-1/2"
    >
      <h2 className="mb-4 text-xl font-bold text-center">게시판 생성</h2>
      <form onSubmit={handleSubmit(onValid)} className="flex items-center justify-start">
        <div className="flex flex-col w-full">
          <label htmlFor="title" className="mb-1">
            게시판 이름
          </label>
          {error ? <ErrorMessage text={error.message} /> : null}
          <input
            {...register("boardName", {
              required: "제목을 입력해주세요.",
              maxLength: { value: 15, message: "최대 15글자 입니다." },
            })}
            type="text"
            id="title"
            className="w-full p-1 border border-black rounded-md"
          />
          {errors?.boardName ? <ErrorMessage text={errors?.boardName?.message} /> : null}
          <input
            type="submit"
            value="생성"
            className="self-center w-24 p-1 mt-8 text-white bg-black rounded-md cursor-pointer"
          />
        </div>
      </form>
    </motion.div>
  );
}

export default BoardForm;
