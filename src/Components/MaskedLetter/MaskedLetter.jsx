import { useEffect } from "react";
import { getAllCharacters } from "./MaskedLetterUtility";

function MaskedLetter({ text, usedLetter, isGameOver, setIsWon }) {
  const letters = getAllCharacters(text, usedLetter).split("");

  useEffect(() => {
    // If user guessed all the characters of word then state of the isWon variable will set to true
    if (!letters.includes("_")) {
      console.log("You won");
      setIsWon(true);
    }
  }, [letters]);

  return (
    <>
      {!isGameOver && // Only right guessed character will be visible untill game is over
        letters.map((letter, index) => {
          return (
            <span
              key={`letter-${index}`}
              className="inline-block mx-2 text-[3rem]"
            >
              {letter}
            </span>
          );
        })}

      {isGameOver && ( // If the game is over, the word will be visible
        <h1 className="text-[2.5vw] text-[#fff]">
          The word is :{" "}
          <span className="text-[#07240ddb]">{text.toUpperCase()}</span>
        </h1>
      )}
    </>
  );
}

export default MaskedLetter;
