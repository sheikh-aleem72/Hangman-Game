const ALPHABETS = new Array(26)
  .fill("")
  .map((character, index) => String.fromCharCode(65 + index));

function LetterButtons({ wordSelected, usedLetter, handleLetterClick }) {
  const originalCharacters = new Set(wordSelected.toUpperCase().split(""));
  const selectedLetters = new Set(usedLetter.join("").toUpperCase().split(""));

  const buttonStyle = function (letter) {
    if (selectedLetters.has(letter)) {
      return `${
        originalCharacters.has(letter)
          ? "bg-green-600 border-4 border-green-700"
          : "bg-red-600 border-4 border-red-700"
      }`;
    } else {
      return "bg-[#511313fa] border border-[#511313fa] hover:bg-[#651000df]";
    }
  };

  function handleClick(event) {
    const character = event.target.value;
    handleLetterClick?.(character);
  }

  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  return (
    <>
      <div className="flex flex-col items-center">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex ">
            {row.split("").map((letter, index) => (
              <button
                key={`button-${letter}`}
                onClick={handleClick}
                value={letter}
                className={`w-[4vw] h-[4vw] text-[2vw] border font-semibold text-white rounded-lg m-1 ${buttonStyle(
                  letter
                )}`}
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default LetterButtons;
