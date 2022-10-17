const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(members) {

  if (!Array.isArray(members)) {

    return false;

  } else {

    members = members.filter(el => typeof el === "string");

    members.forEach((el, n) => (members[n] = el.trim().toUpperCase()));

    members.sort();

    let res = "";

    for (let n = 0; n < members.length; n++) {

      if (typeof members[n] === "string") {

        res += members[n][0];

      }

    }

    return res;

  }

}

module.exports = {
  createDreamTeam
};
