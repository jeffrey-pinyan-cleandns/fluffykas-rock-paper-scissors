import "./ResultContainer.scss";
import { useNavigate } from "react-router-dom";
import { ResultBtn } from "../resultbtn/ResultBtn";
import { useGame } from "../../context";

export const ResultContainer = () => {

  const { userChoice, setUserChoice, setScore, houseChoice, result } = useGame();
  const navigate = useNavigate();

  const resetUserChoice = () => {
    setUserChoice("")
  }

  const resetGame = () => {
    setUserChoice(0);
    setScore(0);
    navigate("/");
  }

  return (
    <div className="result-container">
      <div className="choice-container">
        <h2>You picked</h2>
        <ResultBtn choice={userChoice} />
      </div>
      <div className="result-display">
        <h1>{result}</h1>
        <button onClick={resetUserChoice}>Play again</button>
        <button onClick={resetGame}>Reset game</button>
      </div>
      <div className="choice-container">
        <h2>The house picked</h2>
        <ResultBtn choice={houseChoice} />
      </div>
    </div>
  );
}