import { useCallback, useMemo, useState, useEffect, useContext, createContext } from "react";
import { gameData } from "../data/gameData";

const GameContext = createContext();

export function GameProvider({ children }) {

  const [game, setGame] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const choices = useMemo(() => gameData[game].elements.map(({ name }) => name), [game]);
  const getHouseChoice = useCallback(() => {
    setHouseChoice(choices[Math.floor(Math.random() * (choices.length))])
  }, [choices]);

  useEffect(() => {
    switch (userChoice + houseChoice) {
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
      case "lizardlizard":
      case "spockpock":
        setResult("DRAW");
        break;
      case "rockpaper":
      case "rockspock":
      case "paperscissors":
      case "paperlizard":
      case "scissorsrock":
      case "scissorspock":
      case "lizardrock":
      case "lizardscissors":
      case "spocklizard":
      case "spockpaper":
        setResult("HOUSE WINS");
        break;
      case "rockscissors":
      case "rocklizard":
      case "paperrock":
      case "paperspock":
      case "scissorspaper":
      case "scissorslizard":
      case "lizardspock":
      case "lizardpaper":
      case "spockscissors":
      case "spockrock":
        setResult("USER WINS");
        setScore((score) => score + 1);
        break;
      default:
        console.log("default stuff or error, duh")
    }
  }, [userChoice, houseChoice]);

  const context = useMemo(() => ({
    game, setGame, score, setScore, userChoice, setUserChoice, getHouseChoice, houseChoice, result
  }), [game, setGame, score, setScore, userChoice, setUserChoice, getHouseChoice, houseChoice, result]);

  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}