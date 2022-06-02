import "./GameBtn.scss";
import { useGame } from "../../context";
import { BtnAnimation } from "../../assets/animations";
import { motion } from "framer-motion";
import { useCallback } from "react";

export const GameBtn = ({ element }) => {

  const { setUserChoice, getHouseChoice } = useGame();
  const screenWidth = window.innerWidth;

  const triggerUserChoice = useCallback(() => {
    setUserChoice(element.name);
    getHouseChoice();
  }, [element, setUserChoice, getHouseChoice]);

  return (
    <motion.button className={`${element.name} game-btn`} style={screenWidth < 960 ? element.style : element.styleDesktop} onClick={triggerUserChoice}
      variants={BtnAnimation}
      initial="hidden"
      animate="visible"
    >
      <img src={element.image} alt={element.name} className="game-img" />
    </motion.button>
  );
}
