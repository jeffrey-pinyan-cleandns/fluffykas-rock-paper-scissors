import "./GameContainer.scss";
import bgPentagon from "../../assets/images/bg-pentagon.svg";
import bgTriangle from "../../assets/images/bg-triangle.svg";
import { Header, GameBtn, RulesBtn, ResultContainer } from "../../components";
import { useGame } from "../../context";
import { pageTransition } from "../../assets/animations";
import { motion } from "framer-motion";
import dataForGame from "../../data/gameData.json";
import dataForBonusGame from "../../data/gameDataBonus.json";

export const GameContainer = () => {

  const { game, userChoice } = useGame();
  const gameElements = (game === "Rock, Paper, Scissors, Lizard, Spock" ? dataForBonusGame : dataForGame)

  return (
    <motion.div
      className="game-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <Header />
      {!userChoice ?
        <div className="game-btn-container">
          <img src={(game === "Rock, Paper, Scissors, Lizard, Spock" ? bgPentagon : bgTriangle)} alt="" aria-hidden="true" />
          {gameElements.map((element, index) => {
            return (
              <GameBtn key={index} element={element} />
            )
          })}
        </div> :
        <ResultContainer />
      }
      <div className="rules-wrapper">
        <RulesBtn />
      </div>
    </motion.div>
  );
}