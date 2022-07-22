import { SubmitHandler, useForm } from "react-hook-form";
import { IComment } from "../../interfaces/Props/data/dataInterface";
import { useSendData } from "../../libs/client/hook/useData";
import Form from "./FormParts/Form";
import PasswordSet from "./FormParts/PasswordSet";
import Submit from "./FormParts/Submit";
import TextAreaSet from "./FormParts/TextArea";

function CommentEditForm({ postId, comment }: { postId: number; comment: IComment }) {
  const [sendData, { loading, error, data }] = useSendData("/api/comment", "PUT");

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IComment>({
    defaultValues: {
      content: comment.content,
    },
  });

  const onValid: SubmitHandler<IComment> = (formData) => {
    if (loading) return;
    if (formData.password !== comment.password)
      setError("password", { message: "비밀번호가 틀립니다." });
    const data = { content: formData.content, commentId: comment.id, postId };
    sendData(data);
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <TextAreaSet
        title="수정 댓글"
        error={errors?.content?.message || ""}
        register={register("content")}
      />
      <PasswordSet
        title="비밀번호"
        error={errors?.password?.message || ""}
        register={register("password")}
      />
      <Submit value="수정" />
    </Form>
  );
}

export default CommentEditForm;
