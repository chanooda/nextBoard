import { ISet } from "../../../interfaces/FormInput/formPartsPropsInterface";
import { ErrorMessage } from "../../Error/Error";
import Input from "./Input";
import InputSetContainer from "./InputSetContainer";
import Label from "./Label";

function InputSet({ title, register, error }: ISet) {
  return (
    <InputSetContainer>
      <Label title={title} />
      {error ? <ErrorMessage text={error} /> : null}
      <Input register={register} />
    </InputSetContainer>
  );
}
export default InputSet;
