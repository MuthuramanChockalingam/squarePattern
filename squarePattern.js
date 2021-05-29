const square = (arr) => {

  var firstLine = (arr) => arr.reduce((a,c)=>a+c, '') + '\n';
  var lastLine = (arr) => arr.reduce((a,c)=>c+a, '') + '\n';

  var middleLine = () => {
    var result='';
    var charac = function (val) {
      var k = '';
      return k + arr[val - 1];
    };
    
    var m = arr.length - 1;
    var count = arr.length - 2;
    var spaces = ' '.repeat(count);
    
    for (var i = 0; i < count; i++) {
      var firstCharacter = arr[i + 1];
      var secondCharacter = charac(m - i);
      result = result + (firstCharacter + spaces + secondCharacter +'\n');

    }
    return result;
  }
  
  console.log(firstLine(arr) + middleLine() + lastLine(arr));
}

// square(['a', 'b']);
// square(['a', 'b', 'c']);
square(['a', 'b', 'c', 'd', 'e']);