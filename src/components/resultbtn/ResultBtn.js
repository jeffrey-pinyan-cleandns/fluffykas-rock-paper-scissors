import "./ResultBtn.scss";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";

export const ResultBtn = ({ choice }) => {

  const resultImages = [{ name: "rock", image: rock }, { name: "paper", image: paper }, { name: "scissors", image: scissors }, { name: "lizard", image: lizard }, { name: "spock", image: spock }]

  const selectedImage = resultImages.filter(element => element.name === choice)

  return (
    <div className="results">
      <div className={`${choice} result-btn`}>
        <img src={selectedImage[0].image} alt="" />
      </div>
    </div>
  );
}