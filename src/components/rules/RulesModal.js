import "./RulesModal.scss";
import closeBtn from "../../assets/images/icon-close.svg";
import { useGame } from "../../context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { gameData } from "../../data/gameData";

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
            src={gameData[game].rules.image}
            alt={gameData[game].rules.text}
            className="rules-img"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}