import "./GameContainer.scss";
import { Header, GameBtn, RulesModal, ResultContainer } from "../../components";
import { useGame } from "../../context";
import { pageTransition } from "../../assets/animations";
import { motion } from "framer-motion";
import { gameData } from "../../data/gameData";

export const GameContainer = () => {

  const { game, userChoice } = useGame();
  const gameElements = gameData[game].elements;

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
          <img className="game-bg" src={gameData[game].image} alt="" aria-hidden="true" />
          {gameElements.map((element) => {
            return (
              <GameBtn key={element.name} element={element} />
            )
          })}
        </div> :
        <ResultContainer />
      }
      <div className="rules-wrapper">
        <RulesModal />
      </div>
    </motion.div>
  );
}