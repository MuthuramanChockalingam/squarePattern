const middleLine = (arr) => {
  return arr.map((val,i,arr) => val + ' '.repeat(arr.length) + arr[arr.length - i - 1]);
}

const square = (arr) => {

  var firstLine = arr.join('');
  var lastLine = arr.slice().reverse().join('');
  
  const Lines = [
    firstLine,
    ...middleLine(arr.slice(1,-1)),
    lastLine,
  ]

  return Lines.join('\n');
}

console.log(square(['a', 'b']),'\n');
console.log(square(['a', 'b', 'c']),'\n');
console.log(square(['a', 'b', 'c', 'd', 'e']),'\n');