/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
function midElement(t) {
  var mid = "";
  if (t.length % 2 == 0) {
    console.log(
      t[t.length / 2] +
        "  and  " +
        t[t.length / 2 - 1] +
        "  both are middle elment"
    );
    return (
      t[t.length / 2] + "and" + t[t.length / 2 - 1] + "both are middle elment"
    );
  } else {
    console.log(t[Math.trunc(t.length / 2)]);
    return t[Math.trunc(t.length / 2)];
  }
}

midElement(["a", "b", "n", "j", "k", "j"]);

/* 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(tab) {
  var t = [];
  for (i = 0; i <= tab.length - 1; i++) {
    // console.log(i, "counter");
    // console.log(tab[i], "array");
    if (i % 2 === 0) {
      t.push(tab[i] * 2);
    }
  }
  return t;
}

var res = multipleEvenIndexes([3, 5, 7, 8, 10]);
console.log(res);
