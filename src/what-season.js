const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return "Unable to determine the time of year!";
  }
  if (Object.getOwnPropertyNames(date).length > 0 || date instanceof Date === false) {
    throw new Error("Invalid date!");
  } 
  const Month = date.getMonth();
  if (Month === 11 || Month===0 || Month===1 ){
    return 'winter';
  } 
  if (Month === 2 || Month===3 || Month===4 ){
    return 'spring';
  } 
  if (Month === 5 || Month===6 || Month===7 ){
    return 'summer';
  } 
  return 'autumn'
}

module.exports = {
  getSeason
};
