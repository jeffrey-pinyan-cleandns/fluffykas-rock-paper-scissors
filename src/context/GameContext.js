import { useState, useContext, createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [game, setGame] = useState("");

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}