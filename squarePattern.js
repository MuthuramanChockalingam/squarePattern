const square = (arr) => {

  const firstLine = arr.join('');
  const lastLine = arr.slice().reverse().join('');
  const middleLine = arr.slice(1,-1).map((val,i,arr) => val + ' '.repeat(arr.length) + arr[arr.length - i - 1]);
  const Lines = [
    firstLine,
    ...middleLine,
    lastLine,
  ]

  return Lines.join('\n');
}

console.log(square(['a', 'b']),'\n');
console.log(square(['a', 'b', 'c']),'\n');
console.log(square(['a', 'b', 'c', 'd', 'e']),'\n');