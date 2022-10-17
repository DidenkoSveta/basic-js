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

  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  let strToUpdate = str;

  let defaultadditionRepeatTimes = additionRepeatTimes || 1;

  let defaultrepeatTimes = repeatTimes || 1;

  let initialSeparator = separator || "+";

  let initialadditionSeparator = additionSeparator || "|";

  if (addition !== undefined) {
    addition = String(addition)

  } else {
    addition = "";
  }

  let finalAddition = "";

  let finalStrToUpdate = "";

  if (addition) {

    for (let i = 0; i < defaultadditionRepeatTimes - 1; i++) {
      finalAddition += addition + initialadditionSeparator;
    }

    finalAddition += addition;
  };

  strToUpdate += finalAddition;

    for (let i = 0; i < defaultrepeatTimes - 1; i++) {
      finalStrToUpdate += strToUpdate + initialSeparator;
    }

    finalStrToUpdate += strToUpdate;
    
  return finalStrToUpdate;
}

module.exports = {
  repeater
};