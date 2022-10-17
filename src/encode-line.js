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
  let result = '';
  let count = 1;

  for (let n = 0; n < str.length; n++) {

    if (str[n] === str[n + 1]) {
      count++;

    } else {
      if (count === 1) {
        result += str[n];

      } else {
        result += count + str[n];
        count = 1;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
