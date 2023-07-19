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
