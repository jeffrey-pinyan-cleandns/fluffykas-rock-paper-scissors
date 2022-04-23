import './Home.scss';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">What would you like to play?</h1>
      <div className="game-link-container">
        <Link to="/game" className="game-link">Rock, Paper, Scissors</Link>
        <Link to="/game" className="game-link">Rock, Paper, Scissors, Lizard, Spock</Link>
      </div>
    </div>
  );
}