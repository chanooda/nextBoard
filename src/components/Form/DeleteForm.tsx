import { SubmitHandler, useForm } from "react-hook-form";
import { IDeleteForm } from "../../interfaces/FormInput/formInputInterface";
import { IComment } from "../../interfaces/Props/data/dataInterface";
import { useSendData } from "../../libs/client/hook/useData";
import Form from "./FormParts/Form";
import PasswordSet from "./FormParts/PasswordSet";
import Submit from "./FormParts/Submit";

function DeleteForm({
  postId,
  title,
  comment,
}: {
  postId: number;
  title?: string;
  comment?: IComment;
}) {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDeleteForm>();

  const url = comment ? `/api/comment` : `/api/post?id=${postId}`;
  const [sendDate, { loading, error, data }] = useSendData(url, "DELETE");

  const onValid: SubmitHandler<IDeleteForm> = (formData) => {
    if (loading) return;
    if (formData.password !== comment?.password)
      setError("password", { message: "비밀번호가 틀립니다." });
    const data = { password: formData.password, commentId: comment?.id, postId: comment?.postId };
    sendDate(data);
  };

  return (
    <Form error={error?.message || ""} onSubmit={handleSubmit(onValid)} title={title}>
      <PasswordSet
        error={errors?.password?.message || ""}
        title="비밀번호"
        register={register("password", {
          required: "비밀번호를 입력해주세요.",
          maxLength: {
            value: 12,
            message: "12글자가 최대입니다.",
          },
        })}
      />
      <Submit value={"삭제하기"} />
    </Form>
  );
}

export default DeleteForm;
