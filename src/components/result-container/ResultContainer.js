import "./ResultContainer.scss";
import { useNavigate } from "react-router-dom";
import { ResultBtn } from "../resultbtn/ResultBtn";
import { useGame } from "../../context";
import { motion } from "framer-motion";

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

      <motion.div
        className="choice-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
      >
        <h2>You picked</h2>
        <ResultBtn choice={userChoice} />
      </motion.div>

      <motion.div
        className="result-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
      >
        <h1>{result}</h1>
        <button onClick={resetUserChoice}>Play again</button>
        <button onClick={resetGame}>Reset game</button>
      </motion.div>

      <motion.div
        className="choice-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75 }}
      >
        <h2>The house picked</h2>
        <ResultBtn choice={houseChoice} />
      </motion.div>
    </div>
  );
}