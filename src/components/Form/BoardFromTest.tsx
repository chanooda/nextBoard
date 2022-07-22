import { SubmitHandler, useForm } from "react-hook-form";
import { IBoardForm } from "../../interfaces/FormInput/formInputInterface";
import { useSendData } from "../../libs/client/hook/useData";
import Form from "./FormParts/Form";
import Input from "./FormParts/InputSet";
import Submit from "./FormParts/Submit";

function BoardFormTest() {
  const [sendData, { loading, data, error }] = useSendData("/api/board", "POST");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoardForm>();

  console.log();

  const onValid: SubmitHandler<IBoardForm> = (formData) => {
    console.log(formData);
    if (loading) return;
    sendData(formData);
  };

  return (
    <Form title="게시판 생성" onSubmit={handleSubmit(onValid)}>
      <Input
        error={errors.boardName?.message || ""}
        title={"제목"}
        register={register("boardName", { required: true })}
      />
      <Submit value={"생성"} />
    </Form>
  );
}

export default BoardFormTest;
