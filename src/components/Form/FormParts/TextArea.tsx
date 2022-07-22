import { ISet } from "../../../interfaces/FormInput/formPartsPropsInterface";
import { ErrorMessage } from "../../Error/Error";
import TextArea from "../TextArea";
import InputSetContainer from "./InputSetContainer";
import Label from "./Label";

function TextAreaSet({ title, register, rows, error }: ISet) {
  return (
    <InputSetContainer>
      <Label title={title} />
      {error ? <ErrorMessage text={error} /> : null}
      <TextArea register={register} rows={rows}></TextArea>
    </InputSetContainer>
  );
}

export default TextAreaSet;
