import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import logoBonus from "../../assets/images/logo-bonus.svg";
import { useGame } from "../../context";

export const Header = () => {

  const { game } = useGame();

  return (
    <header>
      <img className="logo" src={game === "Rock, Paper, Scissors" ? logo : logoBonus} alt={game} />
      <div className="score-display">
        <h1 className="score-title">SCORE</h1>
        <span className="score">12</span>
      </div>
    </header>
  );
}