function Submit({ value }: { value: string }) {
  return (
    <div className="flex justify-end">
      <input
        type="submit"
        value={value}
        className="w-24 py-1 text-white bg-black rounded-md cursor-pointer "
      />
    </div>
  );
}
export default Submit;
