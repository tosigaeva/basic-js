const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count ++
    } else {
      encodeStr += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }

  return encodeStr;
}

module.exports = {
  encodeLine
};
