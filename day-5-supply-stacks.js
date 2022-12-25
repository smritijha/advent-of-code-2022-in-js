// https://adventofcode.com/2022/day/5

import {readFile} from "./utils.js";
var data = readFile("data/supply-stacks.txt");

function splitWhiteSpace(str) {
    if (!str.trim()) {
        return Array(Math.floor((str.split(' ').length - 1)/4)).fill(' ')
    } 
    return str
}

// function that takes a list of stacks and returns a list of stacks
// with the crates moved according to the instructions
function moveCrates(stacks, instructions) {
    // for each instruction loop
    for (var i = 0; i < instructions.length; i++) {
        // pattern match array to variables
        var [numCratesToMove, fromStack, toStack] = instructions[i]
        // while loop numCratesToMove
        while (numCratesToMove > 0) {
            // pop from fromStack
            var crate = stacks[fromStack - 1].pop()
            // push to toStack
            stacks[toStack - 1].push(crate)
            // decrement numCratesToMove
            numCratesToMove--
        }
    }
    return stacks
}

var stacksAndInstructions = data.split("\n\n");
var stack = stacksAndInstructions[0]
var crates = stack.split("\n").map(row => row.split(/(\s+)/).flatMap(elem => splitWhiteSpace(elem))).slice(0, -1);
// transpose a matrix
var crateColumns = crates[0].map((_, colIndex) => crates.map(row => row[colIndex]));
// reverse an array
var crateStacks = crateColumns.map(column => column.reverse());
// filter whitespaces from array
var crateStacks = crateStacks.map(stack => stack.filter(crate => crate !== ' '));
var instructions = stacksAndInstructions[1].split("\n");
// get all numbers from a string
var numbers = instructions.map(instruction => instruction.match(/\d+/g).map(Number));
// move crates
var finalStacks = moveCrates(crateStacks, numbers);
// print last element in each stack
console.log(finalStacks.map(stack => stack[stack.length - 1]).join(" "))