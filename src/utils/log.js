/**
 * `If the color argument is passed, then log the text in that color, otherwise just log the text.`
 * @param text - The text to be logged.
 * @param color - The color of the text.
 * @returns The function log is being returned.
 */
/**
 * @description `If the color argument is passed, then log the text in that color, otherwise just log the text.`
 * @author Zastinian
 * @param {String} text
 * @param {String} color
 * @example
 * log('Something')
 * log('Something', listLogColor.FgRed)
 * @returns {void} void
 */
function log(text, color) {
  if (color) {
    return console.log(color, text)
  } else {
    return console.log(text)
  }
}

/* Exporting the function log. */
module.exports = log
