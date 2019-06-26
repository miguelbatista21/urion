var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const p1 = 2.0;
const p2 = 3.0;
const p3 = 5.0;

const n1 = Number(lines[0]);
const n2 = Number(lines[1]);
const n3 = Number(lines[2]);



const result = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

console.log('MEDIA =', result.toFixed(1));  