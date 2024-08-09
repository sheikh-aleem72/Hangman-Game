import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";
import "../../App.css";

function Start() {
  const navigate = useNavigate();
  function handleFormSubmit(value) {
    navigate("/play", { state: { wordSelected: value } });
  }
  return <TextInputFormContainer onSubmit={handleFormSubmit} />;
}

export default Start;
