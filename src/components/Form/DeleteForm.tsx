import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import MotionForm from "./MotionForm";
// interface
import { IDeleteForm } from "../../interfaces/FormInput/formInputInterface";
// libs
import { useSendData } from "../../libs/client/hook/useData";
// component
import { ErrorMessage } from "../Error/Error";
// styled-components
import {
  Form,
  FormContainer,
  FormTitle,
  Label,
  SubmitButton,
  TextInput,
} from "../styled-components/components/form/input.style";

export default function DeleteForm() {
  const {
    query: { postId },
  } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDeleteForm>();
  const [sendData, { loading, data, error }] = useSendData(`/api/post?id=${postId}`, "DELETE");

  const onValid: SubmitHandler<IDeleteForm> = (data: object) => {
    if (loading) return;
    sendData(data);
  };

  return (
    <MotionForm>
      <FormTitle>게시글 삭제</FormTitle>
      <Form onSubmit={handleSubmit(onValid)}>
        <FormContainer>
          {error ? <ErrorMessage text={error.message} /> : null}
          <Label>비밀번호</Label>
          <TextInput
            {...register("password", {
              required: "비밀번호를 입력하세요.",
              maxLength: { value: 15, message: "최대 15글자입니다." },
            })}
            type="password"
          />
          {errors?.password?.message ? <ErrorMessage text={errors?.password?.message} /> : null}
          <SubmitButton type="submit" value="삭제" />
        </FormContainer>
      </Form>
    </MotionForm>
  );
}
