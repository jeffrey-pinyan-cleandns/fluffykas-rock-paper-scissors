import "./GameContainer.scss";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";
import { Header, GameBtn, RulesBtn } from "../../components";
import { useGame } from "../../context";

export const GameContainer = () => {

  const { game } = useGame();

  const btnImages = (game === "Rock, Paper, Scissors" ? [rock, paper, scissors] : [rock, paper, scissors, lizard, spock])

  return (
    <div className="game-container">
      <Header />
      <div className="game-btn-container">
        {btnImages.map((image, index) => {
          return (
            <GameBtn key={index} btnImage={image} />
          )
        })}
      </div>
      <RulesBtn />
    </div>
  );
}