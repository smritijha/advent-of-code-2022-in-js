// https://adventofcode.com/2022/day/2 

import {readFile} from "./utils.js";
var data = readFile("data/rock-paper-scissors.txt");

// paper defeats rock, scissors defeats paper, rock defeats scissors
function getScore(opponent, me) {
    var opponentScore = opponent.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    var myScore = me.charCodeAt(0) - 'X'.charCodeAt(0) + 1;
    
    var scoreDiff = opponentScore - myScore;
    if (scoreDiff == 1 || scoreDiff == -2) { 
        return myScore;
    } else if (scoreDiff == 0) {
        return myScore + 3;
    } else {
        return myScore + 6;
    }
}

var games = data.split("\n").map(game => game.split(" "));
var myScores = games.map(playerChoices => getScore(...playerChoices));
console.log(myScores.reduce((acc, val) => acc + val, 0));