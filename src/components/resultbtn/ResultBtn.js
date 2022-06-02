import { elementImages } from "../../data/gameData";
import "./ResultBtn.scss";

export const ResultBtn = ({ choice }) => {

  return (
    <div className="results">
      <div className={`${choice} result-btn`}>
        <img src={elementImages[choice]} alt="" />
      </div>
    </div>
  );
}