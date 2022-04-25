import "./GameContainer.scss";
import bgPentagon from "../../assets/images/bg-pentagon.svg";
import bgTriangle from "../../assets/images/bg-triangle.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";
import { Header, GameBtn, RulesBtn } from "../../components";
import { useGame } from "../../context";

export const GameContainer = () => {

  const { game } = useGame();

  const bgShape = (game === "Rock, Paper, Scissors, Lizard, Spock" ? bgPentagon : bgTriangle);

  const gameElements = (game === "Rock, Paper, Scissors, Lizard, Spock" ?
    [
      { name: "rock", image: rock, style: { bottom: 0, right: 0 } },
      { name: "paper", image: paper, style: { top: "50%", right: 0, transform: "translateY(-50%)" } },
      { name: "scissors", image: scissors, style: { left: "50%", transform: "translateX(-50%)" } },
      { name: "lizard", image: lizard, style: { bottom: 0 } },
      { name: "spock", image: spock, style: { top: "50%", transform: "translateY(-50%)" } }
    ] :
    [
      { name: "rock", image: rock, style: {} },
      { name: "paper", image: paper, style: { right: 0 } },
      { name: "scissors", image: scissors, style: { bottom: 0, left: "50%", transform: "translateX(-50%)" } }
    ]
  );

  return (
    <div className="game-container">
      <Header />
      <div className="game-btn-container">
        <img src={bgShape} alt="" />
        {gameElements.map((element, index) => {
          return (
            <GameBtn key={index} element={element} />
          )
        })}
      </div>
      <RulesBtn />
    </div>
  );
}