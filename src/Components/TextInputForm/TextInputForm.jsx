import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  handleFormSubmit,
  inputType,
  handleTextInputChange,
  setInputType,
  value,
}) {
  return (
    <form
      className="flex h-screen bg-[#CACDC4] justify-center items-center backdrop-blue-sm"
      onSubmit={handleFormSubmit}
    >
      <div className=" bg-[#b7814bdb] flex flex-col gap-4 rounded-xl px-10 pt-5 pb-10 shadow-lg shadow-gray-700 ">
        <div className="flex justify-center mt-10 flex-col gap-4">
          <h1 className="text-center text-3xl font-bold text-white">HangMan</h1>
          <TextInput
            type={inputType}
            onChange={handleTextInputChange}
            value={value}
            label="Enter a word for your friend to guess:"
          />
        </div>
        <div className="flex gap-4 justify-center ">
          <div className="">
            <Button
              text={inputType === "password" ? "Show" : "Hide"}
              styleType="view"
              onClickHandler={() => {
                setInputType(inputType === "password" ? "text" : "password");
              }}
            />
          </div>
          <div className="">
            <Button text="Enter" buttonType="submit" styleType="desert" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default TextInputForm;
