const firstLine = (arr) => arr.join('');
const middleLines = (arr) => arr.slice(1, -1).map(middleLine());
const middleLine = () =>
  (val, i, arr) => val + ' '.repeat(arr.length) + arr[arr.length - i - 1];
const lastLine = (arr) => arr.slice().reverse().join('');

const square = (arr) => [
  firstLine(arr),
  ...middleLines(arr),
  lastLine(arr),
].join('\n');

console.log(square(['a', 'b']),'\n');
console.log(square(['a', 'b', 'c']),'\n');
console.log(square(['a', 'b', 'c', 'd', 'e']),'\n');

