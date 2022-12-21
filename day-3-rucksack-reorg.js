// https://adventofcode.com/2022/day/3

import {readFile} from "./utils.js";
var data = readFile("data/rucksack-items.txt");

function getCommonItemPriority(item) {
    var len = item.length
    // split string at index
    var first = item.slice(0, len/2);
    var second = item.slice(len/2, len);
    // string to character set
    var firstSet = new Set(first.split(""));
    var secondChars = new Set(second.split(""));
    // intersection of two sets
    var intersection = new Set([...firstSet].filter(x => secondChars.has(x)));
    // return the first character in the intersection
    var commonItem = intersection.values().next().value;
    // check if commonItem is lowercase
    if (commonItem == commonItem.toLowerCase()) {
        return commonItem.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else {
        return commonItem.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    }
}

var items = data.split("\n");
var priorityScores = items.map(item => getCommonItemPriority(item));
console.log(priorityScores.reduce((acc, val) => acc + val, 0));