// https://adventofcode.com/2022/day/1

import {readFile} from "./utils.js";
var data = readFile("data/calorie-counting.txt");
var elves = data.split("\n\n");
var elfCalories = elves.map(elf => elf.split("\n").map(x => Number(x)).reduce((acc, val) => acc + val, 0))
console.log(Math.max(...elfCalories));