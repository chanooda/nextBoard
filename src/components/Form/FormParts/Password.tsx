function Password({ register }: { register: any }) {
  return (
    <input
      {...register}
      type="password"
      className="w-1/3 py-1 pl-1 border border-black rounded-md"
    />
  );
}
export default Password;
