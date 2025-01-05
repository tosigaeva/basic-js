const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  processMessage(message, key, isEncrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const alphabetLength = Z - A + 1;

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let char of message) {
      if (char >= 'A' && char <= 'Z') {
        const messageCodeChar = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const shift = isEncrypt
            ? (messageCodeChar - A + keyCharCode - A) % alphabetLength
            : (messageCodeChar - A - (keyCharCode - A) + alphabetLength) % alphabetLength;

        result += String.fromCharCode(A + shift);

        keyIndex++;
      } else {
        result += char;
      }
    }

    return  this.isDirect ? result : result.split('').reverse().join('');
  }
  encrypt(message, key) {
    return this.processMessage(message, key, true);
  }
  decrypt(encryptedMessage, key) {
   return this.processMessage(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
