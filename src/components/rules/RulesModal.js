import "./RulesModal.scss";
import rules from "../../assets/images/image-rules.svg";
import rulesBonus from "../../assets/images/image-rules-bonus.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import { useGame } from "../../context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const RulesModal = () => {

  const { game } = useGame();

  const [rulesOpened, setRulesOpened] = useState(false);

  const openRulesModal = () => {
    setRulesOpened(!rulesOpened);
  }

  const closeRulesModal = () => {
    setRulesOpened(false);
  }

  let domNode = useClickOutside(() => {
    setRulesOpened(false);
  })

  return (
    <>
      <button className="rules-btn" onClick={openRulesModal}>RULES</button>
      <AnimatePresence>
        <motion.div
          className={`rules-modal ${rulesOpened ? "active" : ""}`}
          ref={domNode}
          key={rulesOpened}
          initial={{ y: "-100%", x: "-50%", opacity: 0 }}
          animate={{ y: "-50%", x: "-50%", opacity: 1 }}
          exit={{ y: "-100%", x: "-50%", opacity: 0 }}
        >
          <div className="modal-top">
            <h2 className="modal-title">Rules</h2>
            <img
              src={closeBtn}
              alt="Close rules."
              className="close-btn"
              onClick={closeRulesModal} />
          </div>
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
        </motion.div>
      </AnimatePresence>
    </>
  );
}