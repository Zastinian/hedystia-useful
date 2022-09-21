/**
 * It returns true if the number is a valid number, otherwise it returns false.
 * @param number - The number to be validated.
 * @returns A boolean value.
 */
/**
 * @description It returns true if the number is a valid number, otherwise it returns false.
 * @author Zastinian
 * @param {Number} number
 * @example
 * console.log(isValidNumber(number))
 * @returns {Boolean} Boolean
 */
function isValidNumber(number) {
  return /^[0-9]+$/.test(number)
}

/* Exporting the function to be used in other files. */
module.exports = isValidNumber
