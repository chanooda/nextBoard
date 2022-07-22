import { SubmitHandler, useForm } from "react-hook-form";
import { IComment } from "../../interfaces/Props/data/dataInterface";
import { ICommentModalProp } from "../../interfaces/Props/modal/modalInterface";
import { useSendData } from "../../libs/client/hook/useData";
import Form from "./FormParts/Form";
import Password from "./FormParts/Password";
import PasswordSet from "./FormParts/PasswordSet";
import Submit from "./FormParts/Submit";
import TextAreaSet from "./FormParts/TextArea";

function CommentForm({ postId }: { postId: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>();

  const [sendData, { loading, error, data }] = useSendData(`/api/comment`, "POST");

  const onValid: SubmitHandler<IComment> = (formData) => {
    if (loading) return;
    const { content, password } = formData;
    const data = { postId, content, password };
    sendData(data);
  };

  return (
    <div className="pb-5 border-b-2 border-black">
      <Form error={error?.message} onSubmit={handleSubmit(onValid)}>
        <TextAreaSet
          error={errors?.content?.message || ""}
          register={register("content", { required: "내용을 입력해주세요." })}
          title="댓글"
        />
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
        <Submit value="전송" />
      </Form>
    </div>
  );
}

export default CommentForm;
