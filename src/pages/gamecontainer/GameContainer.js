import "./GameContainer.scss";
import image from "../../assets/images/bg-triangle.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";
import { Header, GameBtn, RulesBtn } from "../../components";

export const GameContainer = () => {

  let btnImages = [rock, paper, scissors, lizard, spock]

  return (
    <div className="game-container">
      <Header />
      <img src={image} alt="" />
      {btnImages.map((image, index) => {
        return (
          <GameBtn key={index} btnImage={image} />
        )
      })}
      <RulesBtn />
    </div>
  );
}