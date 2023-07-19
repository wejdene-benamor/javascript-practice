/**
 * Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */
function occurrences(tab, n) {
  var c = 0;
  for (i = 0; i <= tab.length; i++) {
    if (tab[i] == n) c = c + 1;
  }
  console.log(c);
  return c;
}
var res = occurrences([1, 5, 1, 7, 6], 1);
console.log(res);
