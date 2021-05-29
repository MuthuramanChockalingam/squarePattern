const square = (arr) => {

  var arrayOfCharConcat = (arr) => arr.reduce((a,c)=>a+c, '') + '\n';

  var middleLine = () => {
    
    var result='';
    var m = arr.length - 1;
    var count = arr.length - 2;

    for (var i = 0; i < count; i++) {
      result = result + ( (firstCharacter = arr[i + 1]) +
        (spaces = ' '.repeat(count)) + (secondCharacter = '' + arr[m - i - 1]) +'\n');
    }
    return result;
  }
  
  console.log(arrayOfCharConcat(arr) + middleLine() + arrayOfCharConcat(arr.reverse()));
}

square(['a', 'b']);
square(['a', 'b', 'c']);
square(['a', 'b', 'c', 'd', 'e']);