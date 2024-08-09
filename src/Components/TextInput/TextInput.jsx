function TextInput({ type = "text", onChange, value, label }) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="font-medium"></span>}
      <input
        className="px-4 py-2 text-xl rounded-md border-2 w-[50vw] md:w-[30vw]"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={label}
      />
    </label>
  );
}

export default TextInput;
