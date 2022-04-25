import "./RulesBtn.scss";
import rules from "../../assets/images/image-rules.svg";
import rulesBonus from "../../assets/images/image-rules-bonus.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import { useGame } from "../../context";
import { useState } from "react";

export const RulesBtn = () => {

  const { game } = useGame();
  const [rulesOpened, setRulesOpened] = useState(false);

  const openRulesModal = () => {
    setRulesOpened(true);
  }

  const closeRulesModal = () => {
    setRulesOpened(false);
  }

  return (
    <>
      <button className="rules-btn" onClick={openRulesModal}>RULES</button>
      <div className={`rules-modal ${rulesOpened ? "active" : ""}`}>
        <h2 className="modal-title">Rules</h2>
        <img
          src={
            game === "Rock, Paper, Scissors, Lizard, Spock" ?
              rulesBonus : rules
          }
          alt={
            game === "Rock, Paper, Scissors, Lizard, Spock" ?
              "Rules of the game: Rock beats Lizard and Scissors. Lizard beats Paper and Spock. Spock beats. Scissors and Rock. Scissors beats Paper and Lizard. Paper beats Rock and Spock." :
              "Rules of the game: Rock beats Scissors. Scissors beats Paper. Paper beats Rock."
          }
          className="rules-img"
        />
        <img
          src={closeBtn}
          alt="Close rules."
          className="close-btn"
          onClick={closeRulesModal} />
      </div>
    </>
  );
}