import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Won({ isGameOver }) {
  const navigate = useNavigate();

  function playAgain() {
    navigate("/start");
  }
  return (
    <>
      <div className="fixed inset-0 h-screen backdrop-blur-sm flex items-center justify-center transition-all delay-1000 ease-in bg">
        <div className="bg-[#3e6262] h-[30vw] w-[40vw] md:h-[20vw] rounded-xl flex items-center justify-center flex-col text-white gap-2">
          <h1 className="text-[2.5vw] font-bold">Congratulations!!!</h1>
          <h1 className="text-[2.5vw] font-bold">You Won!</h1>
          <button
            className="  bg-[#07240ddb] px-2 py-1 rounded-md border border-[#1b5f29db] hover:bg-[#285b32db] text-[1.5vw] mt-2 text-white font-semibold shadow-lg shadow-[#443f3fc9]"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Won;
