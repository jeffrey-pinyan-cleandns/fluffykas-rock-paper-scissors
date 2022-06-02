import bgPentagon from "../assets/images/bg-pentagon.svg";
import bgTriangle from "../assets/images/bg-triangle.svg";
import logo from "../assets/images/logo.svg";
import logoBonus from "../assets/images/logo-bonus.svg";
import rules from "../assets/images/image-rules.svg";
import rulesBonus from "../assets/images/image-rules-bonus.svg";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";

export const gameData = {
    "rps": {
        "name": "Rock, Paper, Scissors",
        "image": bgTriangle,
        "logo": logo,
        "rules": {
            "image": rules,
            "text": "Rules of the game: Rock beats Scissors. Scissors beats Paper. Paper beats Rock.",
        },
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
        "logo": logoBonus,
        "rules": {
            "image": rulesBonus,
            "text": "Rules of the game: Rock beats Lizard and Scissors. Lizard beats Paper and Spock. Spock beats. Scissors and Rock. Scissors beats Paper and Lizard. Paper beats Rock and Spock.",
        },
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

export const elementImages = { "rock": rock, "paper": paper, "scissors": scissors, "lizard": lizard, "spock": spock };