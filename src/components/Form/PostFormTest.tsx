// library
import { SubmitHandler, useForm } from "react-hook-form";
import { IPostForm } from "../../interfaces/FormInput/formInputInterface";
import { IPost } from "../../interfaces/Props/data/dataInterface";
import { useSendData } from "../../libs/client/hook/useData";
// Components
import Form from "./FormParts/Form";
import InputSet from "./FormParts/InputSet";
import PasswordSet from "./FormParts/PasswordSet";
import Submit from "./FormParts/Submit";
import TextAreaSet from "./FormParts/TextArea";

function PostFormTest({ boardId, post }: { post?: IPost; boardId: number }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IPostForm>({
    defaultValues: post
      ? {
          title: post.title,
          content: post.content,
        }
      : {},
  });

  const [sendData, { loading, error, data }] = useSendData("/api/post", post ? "PUT" : "POST");

  const onValid: SubmitHandler<IPostForm> = (formValue) => {
    if (loading) return;
    const { title, content, password } = formValue;
    const data = { boardId: boardId, title, content, password, postId: post ? post.id : null };
    sendData(data);
  };
  console.log(register);
  return (
    <Form
      error={error?.message}
      title={post ? "글수정" : "글쓰기"}
      onSubmit={handleSubmit(onValid)}
    >
      <InputSet
        error={errors?.title?.message || ""}
        title="제목"
        register={register("title", { required: "제목을 입력해주세요." })}
      />
      <TextAreaSet
        error={errors?.content?.message || ""}
        rows={20}
        title="본문"
        register={register("content", { required: "본문을 입력해주세요." })}
      />
      <PasswordSet
        error={errors?.password?.message || ""}
        title="비밀번호"
        register={register("password", {
          required: "비밀번호를 입력해주세요.",
          maxLength: { value: 12, message: "최대 12글자입니다." },
        })}
      />
      <Submit value={post ? "수정" : "생성"} />
    </Form>
  );
}

export default PostFormTest;
