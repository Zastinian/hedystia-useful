/**
 * Get a random number between 2 numbers
 * @param {number} min
 * @param {number} max
 * @example
 * console.log(random(1, 10))
 * @returns {number} Number
 */

function random(min, max) {
	if (!max) return min;
	const r = Math.random() * (max - min) + min;
	return Math.floor(r);
}

module.exports = random;
