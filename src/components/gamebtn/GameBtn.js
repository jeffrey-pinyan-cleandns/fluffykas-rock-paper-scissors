import "./GameBtn.scss";
import { useGame } from "../../context";
import { BtnAnimation } from "../../assets/animations";
import { motion } from "framer-motion";

export const GameBtn = ({ element }) => {

  const { setUserChoice, getHouseChoice } = useGame();

  const triggerUserChoice = () => {
    setUserChoice(element.name);
    getHouseChoice();
  }


  return (
    <motion.button className={`${element.name} game-btn`} style={element.style} onClick={triggerUserChoice}
      variants={BtnAnimation}
      initial="hidden"
      animate="visible"
    >
      <img src={element.image} alt={element.name} />
    </motion.button>
  );
}
