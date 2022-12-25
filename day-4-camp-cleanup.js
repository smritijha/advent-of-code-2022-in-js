// https://adventofcode.com/2022/day/4

import {readFile} from "./utils.js";
var data = readFile("data/camp-cleanup.txt");

function findOverlappingIntervals(intervals) {
    // intervals overlap completely if min of both start times and max of both end times is equal to one of the intervals
    var minStart = Math.min(intervals[0][0], intervals[1][0]);
    var maxEnd = Math.max(intervals[0][1], intervals[1][1]);
    return minStart == intervals[0][0] && maxEnd == intervals[0][1] || minStart == intervals[1][0] && maxEnd == intervals[1][1];
}

var intervalPairs = data.split("\n").map(intervals => intervals.split(",").map(interval => interval.split("-").map(x => Number(x))));
var overlappingIntervals = intervalPairs.map(intervalPair => findOverlappingIntervals(intervalPair));
console.log(overlappingIntervals.filter(x => x).length);