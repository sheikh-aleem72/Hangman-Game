import Start from "./Pages/Start/Start";
import Play from "./Pages/Play/Play";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PlayContainer from "./Pages/Play/PlayContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/play" element={<PlayContainer />} />
        <Route path="*" element="Page not found" />
      </Routes>
    </>
  );
}

export default App;
