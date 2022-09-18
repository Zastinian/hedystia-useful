/**
 * @description Check if it is a number
 * @author Zastinian
 * @param {Number} number
 * @example
 * console.log(isValidNumber(number))
 * @returns {Boolean} Boolean
 */

function isValidNumber(number) {
  return /^[0-9]+$/.test(number)
}

module.exports = isValidNumber
