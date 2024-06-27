/**
 * Make a log with or without color
 * @param {string} text
 * @param {string} color
 * @example
 * log('Something')
 * log('Something', logColor.FgRed)
 * @returns {void} void
 */

function log(text, color) {
	if (color) {
		return console.log(color, text);
	}
	return console.log(text);
}

module.exports = log;
