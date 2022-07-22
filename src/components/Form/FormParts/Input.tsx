function Input({ register }: { register: any }) {
  return <input {...register} type="text" className="py-1 pl-1 border border-black rounded-md" />;
}

export default Input;
