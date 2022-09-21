/**
 * If the value is an empty string, return true, otherwise return false.
 * @param value - The value to check.
 * @returns true
 */
/**
 * @description If the value is an empty string, return true, otherwise return false.
 * @author Zastinian
 * @param {String} value
 * @example
 * console.log(isEmptyString('Something'))
 * @returns {Boolean} Boolean
 */
function isEmptyString(value) {
  return value === ""
}

/* Exporting the function to be used in other files. */
module.exports = isEmptyString
