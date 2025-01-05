const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberStr = String(n);
  const numberArr = [];

  for (let i = 0; i < numberStr.length; i++) {
    numberArr.push(Number(String(n).slice(0, i) + String(n).slice(i + 1)))
  }

  numberArr.sort((a, b) => b - a);

  return numberArr[0];
}

module.exports = {
  deleteDigit
};
