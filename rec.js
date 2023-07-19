// Using a for loop THEN a while loop THEN recursion
//  Write a JavaScript function that will iterate from n to 0. For each iteration,
//  it will check if the current number is odd or even, and display a message to the screen.
//  iterateAndLog(3); =>
//  Sample Output :
//  "2 is even"
//  "1 is odd"
//  "0 is even"

function reverseIterateAndLogWithFor(n) {
  // TODO: your work goes here
}

function reverseIterateAndLogWithWhile(n) {
  // TODO: your work goes here
}

function reverseIterateAndLogRecursively(n) {
  // TODO: your work goes here
}
function JavaScript(n) {
  for (i = n; i >= 0; i--) {
    if (i % 2 == 0) console.log(i + " is even");
    else console.log(i + " is odd");
  }
}
//var res = JavaScript(8);
//console.log(res);
function JavaScriptWHIlE(n) {
  var i = n;
  while (i >= 0) {
    if (i % 2 == 0) console.log(i + "is even");
    else console.log(i + "is odd");
    i--;
  }
}
var res = JavaScriptWHIlE(9);
console.log(res);
