import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Play from "./Play";

function PlayContainer() {
  const [usedLetter, setUsedLetter] = useState([]); // To store used letter
  const [step, setStep] = useState(0); // To keep track of the remaining attempts
  const [isGameOver, setIsGameOver] = useState(false); // To keep track of if the game is over
  const [isWon, setIsWon] = useState(false); // To keep track if the user won
  const navigate = useNavigate();
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;

  // When user guess by clicking the letter, this functions handle, if the guessed letter is wrong then step will be increased by 1 and appends the letter into the usedLetter variable
  function handleLetterClick(letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      console.log("Incorrect");
      setStep(step + 1);
    }

    setUsedLetter([...usedLetter, letter]);
  }

  // This function keep track of step variable and set to isGameOver variable to true if user have done with all atempts.
  useEffect(() => {
    if (step == 7) {
      setIsGameOver(true);
    }
  }, [step]);

  // This function simply navigate to start page
  function restart() {
    navigate("/start");
  }

  return (
    <>
      <Play
        usedLetter={usedLetter}
        wordSelected={wordSelected}
        isGameOver={isGameOver}
        step={step}
        handleLetterClick={handleLetterClick}
        setIsWon={setIsWon}
        isWon={isWon}
        restart={restart}
      />
    </>
  );
}

export default PlayContainer;
