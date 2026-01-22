const fs = require('fs');

// Read the file
const data = fs.readFileSync('input.txt', 'utf-8');

// Count words
const words = data.split(/\s+/);
const wordCount = words.length;

// Write the count to a new file
fs.writeFileSync('output.txt', 'Word Count: ' + wordCount);

console.log('Word count written to output.txt');
