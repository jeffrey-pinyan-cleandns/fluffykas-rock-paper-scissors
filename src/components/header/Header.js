import "./Header.scss";
import { useGame } from "../../context";
import { gameData } from "../../data/gameData";

export const Header = () => {

  const { game, score } = useGame();

  return (
    <header>
      <img className="logo" src={gameData[game].logo} alt={game} />
      <div className="score-display">
        <h1 className="score-title">SCORE</h1>
        <span className="score">{score}</span>
      </div>
    </header>
  );
}