import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/start");
  }
  return (
    <>
      <div className="flex bg-blue-300 py-2 h-screen flex-col bg-image items-center ">
        <h1 className="text-center text-[16vw] font-extrabold backdrop-blur-[] font-mono heading flex justify-center text-[#bc834f]">
          HAN<span className="self-center opacity-80">G</span>MAN
        </h1>
        <button
          className="text-2xl text-white bg-[#71442b] px-6 py-2 rounded-lg border-2 hover:bg-[#4f2309] hover:text-black"
          onClick={handleClick}
        >
          PLAY
        </button>
      </div>
    </>
  );
}

export default Home;
