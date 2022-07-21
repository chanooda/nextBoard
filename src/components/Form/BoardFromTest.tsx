import Form from "./Form";
import Input from "./Input";
import Submit from "./Submit";

function BoardFormTest() {
  const onSubmit = () => {};

  return (
    <Form onSubmit={onSubmit}>
      <Input title={"제목"} />
      <Submit value={"생성"} />
    </Form>
  );
}

export default BoardFormTest;
