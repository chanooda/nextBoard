import { SubmitHandler, useForm } from "react-hook-form";
import { IBoardForm } from "../../interfaces/FormInput/formInputInterface";
import { useSendData } from "../../libs/client/hook/useData";
import Form from "./Form";
import Input from "./Input";
import Submit from "./Submit";

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
    <Form onSubmit={handleSubmit(onValid)}>
      <Input title={"제목"} register={register("boardName")} />
      <Submit value={"생성"} />
    </Form>
  );
}

export default BoardFormTest;
