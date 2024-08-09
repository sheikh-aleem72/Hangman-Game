import getButtonStylling from "./getButtonStyleType";

function Button({ buttonType = "button", text, styleType, onClickHandler }) {
  return (
    // <div className="flex-row w-screen bg-gray-300">
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={`rounded-md shadow-sm shadow-black font-semibold text-white transition-all text-xl ${getButtonStylling(
        styleType
      )}`}
    >
      {text}
    </button>
    // </div>
  );
}

export default Button;
