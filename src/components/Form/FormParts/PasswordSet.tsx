import { ISet } from "../../../interfaces/FormInput/formPartsPropsInterface";
import { ErrorMessage } from "../../Error/Error";
import SetContainer from "./InputSetContainer";
import Label from "./Label";
import Password from "./Password";

function PasswordSet({ title, register, error }: ISet) {
  return (
    <SetContainer>
      <Label title={title} />
      {error ? <ErrorMessage text={error} /> : null}
      <Password register={register} />
    </SetContainer>
  );
}

export default PasswordSet;
