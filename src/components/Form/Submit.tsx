function Submit({ value }: { value: string }) {
  return (
    <div>
      <input
        type="submit"
        value={value}
        className="float-right w-24 py-1 mt-6 text-white bg-black rounded-md cursor-pointer"
      />
    </div>
  );
}
export default Submit;
