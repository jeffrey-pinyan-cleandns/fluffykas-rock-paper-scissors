import { useState, useContext, createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [game, setGame] = useState("");
  let [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ game, setGame, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}