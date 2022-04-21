import "./Header.scss";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Rock Paper Scissors." />
      <div className="score-display">
        <h1 className="score-title">SCORE</h1>
        <span className="score">12</span>
      </div>
    </header>
  );
}