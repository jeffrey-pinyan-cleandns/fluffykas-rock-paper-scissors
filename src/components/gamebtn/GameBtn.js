import "./GameBtn.scss";

export const GameBtn = ({ element, setUserChoice, getHouseChoice }) => {

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
