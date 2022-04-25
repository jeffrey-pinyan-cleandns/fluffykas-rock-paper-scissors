import "./GameBtn.scss";

export const GameBtn = ({ element }) => {
  return (
    <button className={`${element.name} game-btn`} style={element.style}>
      <img src={element.image} alt={element.name} />
    </button>
  );
}
