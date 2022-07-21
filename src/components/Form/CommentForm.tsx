import { SubmitHandler, useForm } from "react-hook-form";
import { IPostProps } from "../../interfaces/Props/pages/PageInterface";
import { useSendData } from "../../libs/client/hook/useData";

interface ICommentForm {
  content: string;
  password: string;
}

function CommentForm({ post }: IPostProps) {
  const [sendData, { loading, data, error }] = useSendData("/api/comment", "POST");

  const { register, handleSubmit } = useForm<ICommentForm>();

  const onValid: SubmitHandler<ICommentForm> = (formData) => {
    if (loading) return;
    const data = { ...formData, postId: post.id, boardId: post.boardId };
    sendData(data);
  };

  return (
    <div className="w-full mt-5">
      <form className="w-full" onSubmit={handleSubmit(onValid)}>
        <textarea
          {...register("content", { required: true })}
          placeholder="댓글을 입력해주세요."
          rows={4}
          className="w-full border border-black resize-none"
        />
        <div className="flex justify-between mt-1">
          <input
            {...register("password", {
              required: true,
            })}
            placeholder="비밀번호"
            type="password"
            className=" py-2 border border-black max-w-[220px]"
          />
          <input
            type="submit"
            value="등록"
            className="py-2 px-10 bg-white max-w-[120px] cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
export default CommentForm;
