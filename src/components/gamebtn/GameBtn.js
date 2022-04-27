import "./GameBtn.scss";
import { useGame } from "../../context";

export const GameBtn = ({ element }) => {

  const { setUserChoice, getHouseChoice } = useGame();

  const triggerUserChoice = () => {
    setUserChoice(element.name);
    getHouseChoice();
  }


  return (
    <button className={`${element.name} game-btn`} style={element.style} onClick={triggerUserChoice}>
      <img src={element.image} alt={element.name} />
    </button>
  );
}
