import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import logoBonus from "../../assets/images/logo-bonus.svg";
import { useGame } from "../../context";

export const Header = () => {

  const { game, score } = useGame();

  return (
    <header>
      <img className="logo" src={game === "Rock, Paper, Scissors, Lizard, Spock" ? logoBonus : logo} alt={game} />
      <div className="score-display">
        <h1 className="score-title">SCORE</h1>
        <span className="score">{score}</span>
      </div>
    </header>
  );
}