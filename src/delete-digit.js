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

  let res = [];

  let nStr = String(n);

  for (let i = 0; i < nStr.length; i++) {

    let newStr = nStr;

    newStr = newStr.split("")

    newStr.splice(i, 1);

    newStr = newStr.join("");

    res.push(Number(newStr));

  }

  res.sort((a, b) => b - a);

  return res[0];

}

module.exports = {
  deleteDigit
};
