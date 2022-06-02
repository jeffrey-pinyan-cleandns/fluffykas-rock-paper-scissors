import './Home.scss';
import { Link } from "react-router-dom";
import { useGame } from "../../context";
import { pageTransition } from "../../assets/animations";
import { motion } from "framer-motion";
import { games } from '../../data/gameData';

export const Home = () => {
  const { setGame } = useGame();

  return (
    <motion.div
      className="home"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <h1 className="home-title">What would you like to play?</h1>
      <div className="game-link-container">
        {games.map(({ game, name }) => (
          <Link key={game} to="/game" className="game-link" onClick={() => setGame(game)}>{name}</Link>
        ))}
      </div>
    </motion.div>
  );
}