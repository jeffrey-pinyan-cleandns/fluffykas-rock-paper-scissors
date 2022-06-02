import bgPentagon from "../assets/images/bg-pentagon.svg";
import bgTriangle from "../assets/images/bg-triangle.svg";

export const gameData = {
    "rps": {
        "name": "Rock, Paper, Scissors",
        "image": bgTriangle,
        "elements": [
            {
                "name": "rock",
                "image": "/images/icon-rock.svg",
                "style" : { "left": "2rem" },
                "styleDesktop" : { "left": "-1rem" }
            },
            {
                "name": "paper",
                "image": "/images/icon-paper.svg",
                "style" : { "right": "2rem" },
                "styleDesktop" : { "right": "0rem" }
            },
            {
                "name": "scissors",
                "image": "/images/icon-scissors.svg",
                "style" : {"bottom": "-.5rem", "left": "8.5rem"},
                "styleDesktop" : {"bottom": "0rem", "left": "8rem"}
            },
        ],
    },
    "rpsls": {
        "name": "Rock, Paper, Scissors, Lizard, Spock",
        "image": bgPentagon,
        "elements": [
            {
                "name": "rock",
                "image": "/images/icon-rock.svg",
                "style" : { "bottom": "-1.5rem", "right": "4rem" },
                "styleDesktop" : { "bottom": "-2rem", "right": "2rem" }
            },
            {
                "name": "paper",
                "image": "/images/icon-paper.svg",
                "style" : { "right": "2rem", "top": "5rem" },
                "styleDesktop" : { "right": "-1rem", "top": "6rem" }
            },
            {
                "name": "scissors",
                "image": "/images/icon-scissors.svg",
                "style" : { "left": "9rem", "top": "-1rem" },
                "styleDesktop" : { "left": "9rem", "top": "-1.5rem" }
            },
            {
                "name": "lizard",
                "image": "/images/icon-lizard.svg",
                "style" : { "bottom": "-1.25rem", "left": "4rem" },
                "styleDesktop" : { "bottom": "-2.25rem", "left": "2rem" }
            },
            {
                "name": "spock",
                "image": "/images/icon-spock.svg",
                "style" : { "left": "2rem", "top": "5rem"},
                "styleDesktop" : { "left": "-1rem", "top": "6rem"}
            },
        ],
    },
};

export const games = Object.entries(gameData).map(([ game, data ]) => ({ game, ...data }));