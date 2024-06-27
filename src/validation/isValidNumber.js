/**
 * Check if it is a number
 * @param {number} number
 * @example
 * console.log(isValidNumber(number))
 * @returns {boolean} Boolean
 */

function isValidNumber(number) {
	return /^[0-9]+$/.test(number);
}

module.exports = isValidNumber;
