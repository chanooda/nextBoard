function Input({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{title}</label>
      <input type="text" className="border border-black" />
    </div>
  );
}
export default Input;
