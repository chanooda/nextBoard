import mitt from "next/dist/shared/lib/mitt";
import { SubmitHandler, useForm } from "react-hook-form";
import { IWriteCommentForm } from "../../interfaces/FormInput/formInputInterface";
import { ICommentModalProp } from "../../interfaces/Props/modal/modalInterface";
import { useSendData } from "../../libs/client/hook/useData";
import { ErrorMessage } from "../Error/Error";

function CommentModalForm({ comment, method }: ICommentModalProp) {
  const [sendData, { loading, error, data }] = useSendData(`/api/comment`, method);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IWriteCommentForm>({
    defaultValues: {
      content: comment?.content,
    },
  });

  const onValid: SubmitHandler<IWriteCommentForm> = (formData) => {
    if (loading) return;
    if (formData.password !== comment.password) {
      setError("password", { message: "비밀번호가 다릅니다." });
      return;
    }
    const data =
      method === "PUT"
        ? { content: formData.content, commentId: comment.id, postId: comment.postId }
        : { password: formData.password, postId: comment.postId, commentId: comment.id };
    sendData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="flex flex-col py-8">
          {method === "PUT" ? (
            <div>
              <textarea
                {...register("content", { required: "내용을 입력해주세요." })}
                rows={3}
                className="w-full border border-black resize-none"
              ></textarea>
              {errors.content ? <ErrorMessage text={errors?.content?.message} /> : null}
            </div>
          ) : null}
          <div className="flex justify-between h-12 mt-6">
            <div className="w-full">
              <input
                {...register("password", {
                  required: "비밀번호를 입력하세요.",
                  maxLength: {
                    message: "최대 15글자입니다.",
                    value: 15,
                  },
                })}
                type="password"
                placeholder="비밀번호"
                className="w-1/3 h-full border border-black"
              />
              {errors.password ? <ErrorMessage text={errors?.password?.message} /> : null}
            </div>
            <input
              type="submit"
              value={method === "PUT" ? "수정하기" : "삭제하기"}
              className="w-1/3 text-white bg-black cursor-pointer"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CommentModalForm;
