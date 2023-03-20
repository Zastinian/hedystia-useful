/**
 * Make a log with or without color
 * @param {String} text
 * @param {String} color
 * @example
 * log('Something')
 * log('Something', listLogColor.FgRed)
 * @returns {void} void
 */

function log(text, color) {
  if (color) {
    return console.log(color, text);
  } else {
    return console.log(text);
  }
}

module.exports = log;
