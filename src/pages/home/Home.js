import './Home.scss';
import { Link } from "react-router-dom";
import { useGame } from "../../context";
import { pageTransition } from "../../assets/animations";
import { motion } from "framer-motion";

export const Home = () => {
  const { setGame } = useGame();

  const selectGame = (e) => {
    setGame(e.target.textContent);
  }

  return (
    <motion.div
      className="home"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <h1 className="home-title">What would you like to play?</h1>
      <div className="game-link-container">
        <Link to="/game" className="game-link" onClick={selectGame}>Rock, Paper, Scissors</Link>
        <Link to="/game" className="game-link" onClick={selectGame}>Rock, Paper, Scissors, Lizard, Spock</Link>
      </div>
    </motion.div>
  );
}