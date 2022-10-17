const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let dnsStatus = {};

  let dnsArray = [];

  domains.forEach(element => {

    element = element.split(".").reverse();

    let tempArray = [];

    let tempString = "";

    for (let i = 0; i < element.length; i++) {

      tempArray.push(element[i]);

      tempString = tempArray.join(".");

      dnsArray.push(tempString);

    }

  })

  for (let i = 0; i < dnsArray.length; i++) {

    if (!dnsStatus.hasOwnProperty(`.${dnsArray[i]}`)) {

      dnsStatus[`.${dnsArray[i]}`] = 1;

    } else {

      dnsStatus[`.${dnsArray[i]}`]++;

    }

  }

  return dnsStatus;

}

module.exports = {
  getDNSStats
};
