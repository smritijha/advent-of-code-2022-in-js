import fs from 'fs';
import path from 'path';
// write a function that reads a text file and returns the contents as a string
export function readFile(filename) {
    return fs.readFileSync(path.join(filename), 'utf8');
}