import { SubmitHandler, useForm } from "react-hook-form";
// interfaces
import { IPostForm } from "../../interfaces/FormInput/formInputInterface";
import { IPostFormProps } from "../../interfaces/Props/Form/formPropsInterface";
// customHook
import { useSendData } from "../../libs/client/hook/useData";
// components
import { ErrorMessage } from "../Error/Error";
import {
  FormContainer,
  Label,
  SubmitButton,
  TextArea,
  TextInput,
  Form,
  FormTitle,
} from "../styled-components/components/form/input.style";
import MotionForm from "./MotionForm";

export default function PostForm({ boardId, edit, post }: IPostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostForm>({
    defaultValues: edit
      ? {
          title: post?.title,
          content: post?.content,
        }
      : {},
  });

  const [sendData, { loading, data, error }] = useSendData("/api/post", edit ? "PUT" : "POST");

  const onValid: SubmitHandler<IPostForm> = (formData) => {
    if (loading) return;

    const data = edit ? { ...formData, postId: post?.id, boardId } : { ...formData, boardId };
    sendData(data);
  };

  return (
    <MotionForm>
      <FormTitle>{edit ? "게시글 수정" : "글쓰기"}</FormTitle>
      <Form onSubmit={handleSubmit(onValid)} className="">
        <FormContainer>
          <Label htmlFor="title">제목</Label>
          {error ? <ErrorMessage text={error.message} /> : null}
          <TextInput
            {...register("title", {
              required: "제목을 입력해주세요.",
              maxLength: { value: 30, message: "최대 30글자 입니다." },
            })}
            type="text"
            id="title"
            className="w-full p-1 border border-black rounded-md"
          />
          {errors?.title ? <ErrorMessage text={errors?.title?.message} /> : null}
          <Label htmlFor="content" className="mb-1">
            내용
          </Label>
          <TextArea
            {...register("content", {
              required: "내용을 입력해주세요.",
            })}
            id="content"
            className=""
          />
          {errors?.content ? <ErrorMessage text={errors?.content?.message} /> : null}
          <Label htmlFor="password" className="mb-1">
            비밀번호
          </Label>
          <TextInput
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              maxLength: { value: 15, message: "최대 15글자 입니다." },
            })}
            type="password"
            id="password"
            className="w-full p-1 border border-black rounded-md"
          />
          {errors?.password ? <ErrorMessage text={errors?.password?.message} /> : null}
          <SubmitButton type="submit" value={edit ? "수정" : "생성"} />
        </FormContainer>
      </Form>
    </MotionForm>
  );
}
