var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const na = Number(lines[0]);
const nb = Number(lines[1]);
const nc = Number(lines[2]);
const nd = Number(lines[3]);


const result = na * nb - nc * nd;

console.log('DIFERENCA =', result);  