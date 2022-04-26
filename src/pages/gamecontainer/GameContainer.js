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
import { useEffect, useState } from "react";

export const GameContainer = () => {

  const { game, score, setScore } = useGame();


  //stuff needed for css
  const bgShape = (game === "Rock, Paper, Scissors, Lizard, Spock" ? bgPentagon : bgTriangle);

  const gameElements = (game === "Rock, Paper, Scissors, Lizard, Spock" ?
    [
      { name: "rock", image: rock, style: { bottom: "-2.5rem", right: 0 } },
      { name: "paper", image: paper, style: { top: "50%", right: "-2.5rem", transform: "translateY(-50%)" } },
      { name: "scissors", image: scissors, style: { top: "-2.5rem", left: "50%", transform: "translateX(-50%)" } },
      { name: "lizard", image: lizard, style: { bottom: "-2.5rem" } },
      { name: "spock", image: spock, style: { top: "50%", left: "-2.5rem", transform: "translateY(-50%)" } }
    ] :
    [
      { name: "rock", image: rock, style: { left: "-2.5rem" } },
      { name: "paper", image: paper, style: { right: "-2.5rem" } },
      { name: "scissors", image: scissors, style: { bottom: "-2.5rem", left: "50%", transform: "translateX(-50%)" } }
    ]
  );


  //Setting game rules, getting userChoice, a random houseChoice and compare the two for the winner
  const [userChoice, setUserChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [winner, setWinner] = useState("");

  const choices = (game === "Rock, Paper, Scissors, Lizard, Spock" ? ["rock", "paper", "scissors", "lizard", "spock"] : ["rock", "paper", "scissors"]);

  const getHouseChoice = () => {
    setHouseChoice(choices[Math.floor(Math.random() * (choices.length))])
  }

  useEffect(() => {
    switch (userChoice) {
      case "rock":
        if (houseChoice === "rock") {
          setWinner("DRAW");
        } else if (houseChoice === "paper") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "lizard") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else if (houseChoice === "spock") {
          setWinner("HOUSE WINS");
        } else {
          setWinner("USER WINS");
          setScore(score + 1);
        };
        break;
      case "paper":
        if (houseChoice === "rock") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else if (houseChoice === "paper") {
          setWinner("DRAW");
        } else if (houseChoice === "lizard") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "spock") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else {
          setWinner("HOUSE WINS");
        };
        break;
      case "scissors":
        if (houseChoice === "rock") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "paper") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else if (houseChoice === "lizard") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else if (houseChoice === "spock") {
          setWinner("HOUSE WINS");
        } else {
          setWinner("DRAW");
        };
        break;
      case "lizard":
        if (houseChoice === "rock") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "paper") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else if (houseChoice === "lizard") {
          setWinner("DRAW");
        } else if (houseChoice === "spock") {
          setWinner("USER WINS");
          setScore(score + 1);
        } else {
          setWinner("HOUSE WINS");
        };
        break;
      case "spock":
        if (houseChoice === "rock") {
          setWinner("USER WINS");
          setScore(score + 1)
        } else if (houseChoice === "paper") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "lizard") {
          setWinner("HOUSE WINS");
        } else if (houseChoice === "spock") {
          setWinner("DRAW");
          setScore(score + 1);
        } else {
          setWinner("USER WINS");
        };
        break;
      default:
        setWinner("default stuff or error, duh")
    }
  }, [userChoice, houseChoice])

  //rules:
  // userChoice === "rock" && houseChoice === "rock" => DRAW / SCORE UNCHANGED
  // userChoice === "rock" && houseChoice === "paper" => HOUSE WIN / SCORE UNCHANGED
  // userChoice === "rock" && houseChoice === "scissors" => USER WIN / SCORE INCREMENTED
  // userChoice === "paper" && houseChoice === "rock" => USER WIN / SCORE INCREMENTED
  // userChoice === "paper" && houseChoice === "paper" => DRAW /SCORE UNCHANGED
  // userChoice === "paper" && houseChoice === "scissors" => HOUSE WIN / SCORE UNCHANGED
  // userChoice === "scissors" && houseChoice === "rock" => USER WIN / SCORE INCREMENTED
  // userChoice === "scissors" && houseChoice === "rock" => HOUSE WINS / SCORE UNCHANGED
  // userChoice === "scissors" && houseChoice === "scissors" => DRAW / SCORE UNCHANGED

  return (
    <div className="game-container">
      <Header />
      <div className="game-btn-container">
        <img src={bgShape} alt="" aria-hidden="true" />
        {gameElements.map((element, index) => {
          return (
            <GameBtn key={index} element={element} setUserChoice={setUserChoice} getHouseChoice={getHouseChoice} />
          )
        })}
      </div>
      {userChoice && <div className="somestuff">{userChoice}, {houseChoice}, {winner}</div>}
      {userChoice && <div className="results">
        {/* eeeeh..gameElements.filter... maybe? */}
      </div>}
      <RulesBtn />
    </div>
  );
}