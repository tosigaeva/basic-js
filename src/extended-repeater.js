const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  const fullAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const repeatedString = new Array(repeatTimes).fill(string + fullAddition).join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};
