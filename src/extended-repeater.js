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
  
  let repeatTimes = options.repeatTimes || 1;
  
  let separator = options.separator || "+";
  
  let addition =
    String(options.addition) == "undefined" ? "" : String(options.addition);
  
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let additionSeparator = options.additionSeparator || "|";
  
  let res = addition;
  
  for ( let i = 1; i < additionRepeatTimes; i++) {
    res += additionSeparator + addition;
    
  let oneStr = str + res;
    
  let result = str + res;
    
  for ( let i = 1; i < repeatTimes; i++) {
    result += separator + oneStr;
  }
    
  return result;
    
}

module.exports = {
  repeater,
};

module.exports = {
  repeater
};
