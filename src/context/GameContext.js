import { useState, useEffect, useContext, createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [game, setGame] = useState("");
  let [score, setScore] = useState(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice, houseChoice])

  return (
    <GameContext.Provider value={{ game, setGame, score, setScore, setUserChoice, userChoice, getHouseChoice, houseChoice, winner }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}