function TextArea({ rows, register }: { rows?: number; register: any }) {
  return (
    <textarea
      {...register}
      className="w-full p-2 border border-black rounded-md resize-none"
      rows={rows || 3}
    ></textarea>
  );
}
export default TextArea;
