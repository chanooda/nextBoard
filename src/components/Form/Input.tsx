import { RegisterOptions, UseFormRegister } from "react-hook-form";

function Input({ title, register }: { title: string; register: any }) {
  console.log(register);
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold text-md">{title}</label>
      <input {...register} type="text" className="py-1 pl-1 border border-black rounded-lg" />
    </div>
  );
}
export default Input;
