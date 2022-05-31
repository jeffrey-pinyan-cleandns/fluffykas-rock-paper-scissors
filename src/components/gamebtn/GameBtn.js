import "./GameBtn.scss";
import { useGame } from "../../context";
import { BtnAnimation } from "../../assets/animations";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GameBtn = ({ element }) => {

  const { setUserChoice, getHouseChoice } = useGame();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(screenWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, []);

  const triggerUserChoice = () => {
    setUserChoice(element.name);
    getHouseChoice();
  }


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
