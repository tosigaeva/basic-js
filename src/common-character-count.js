const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let char of s1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (let char of s2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  let commonCount = 0;

  for (let [char, count] of map1) {
    if (map2.has(char)) {
      commonCount += Math.min(count, map2.get(char));
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
