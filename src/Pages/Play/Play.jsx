import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LetterButtons from "../../Components/LetterButtons/LetterButtons";
import MaskedLetter from "../../Components/MaskedLetter/MaskedLetter";
import HangMan from "../../Components/HangMan/HangMan";
import Won from "../../Components/Won/Won";

function Play({
  usedLetter,
  wordSelected,
  isGameOver,
  step,
  handleLetterClick,
  isWon,
  setIsWon,
  restart,
}) {
  return (
    <div className="bg-[#a49483fd] h-screen flex flex-col gap-10 py-6 px-4">
      <div className="md:flex items-center gap-4 h-full ">
        <div className="flex flex-col gap-14 md:w-[50vw]">
          <div className="flex  items-center justify-center gap-2 ">
            <MaskedLetter
              text={wordSelected}
              usedLetter={usedLetter}
              isGameOver={isGameOver}
              setIsWon={setIsWon}
            />
          </div>
          {!isGameOver && (
            // This div of keyboard will be displayed untill the game is over
            <div className="px-8">
              <LetterButtons
                wordSelected={wordSelected}
                usedLetter={usedLetter}
                handleLetterClick={handleLetterClick}
              />
            </div>
          )}
          {isGameOver && (
            // This div will be displayed after the game is over.
            <div className=" w-[80%] h-[20vw] ml-2 flex flex-col justify-center items-center delay-1000 rounded-xl shadow-lg shadow-[#343131bf] self-center">
              <h1 className="text-[2vw] font-bold text-white">Game Over!</h1>
              <h1 className="text-[2vw] font-bold text-slate-200">You Lost!</h1>
              <button
                className=" bg-[#07240ddb] px-2 py-1 rounded-md border border-[#1b5f29db] hover:bg-[#285b32db] text-[1.5vw] mt-2 text-white font-semibold shadow-lg shadow-[#443f3fc9]"
                onClick={restart}
              >
                Restart
              </button>
            </div>
          )}
          <h1 className="text-center text-xl font-semibold text-[#0d3d04fa]">
            Remaining Attempts: {7 - step}
          </h1>
        </div>
        <div className="basis-2/4 flex justify-center">
          <HangMan step={step} />
        </div>
      </div>
      <div></div>
      {/* If user guessed all the letters, then this modal will be shown. */}
      {isWon && <Won />}
    </div>
  );
}

export default Play;
