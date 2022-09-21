/**
 * `random(min, max)` returns a random integer between `min` and `max` (inclusive).
 *
 * If you only pass in one argument, it will return a random integer between 0 and `min` (inclusive).
 * @param min - The minimum number to return.
 * @param max - The maximum number to generate.
 * @returns a random number between the min and max values.
 */
/**
 * @description `random(min, max)` returns a random integer between `min` and `max` (inclusive).
 *
 * If you only pass in one argument, it will return a random integer between 0 and `min` (inclusive).
 * @author Zastinian
 * @param {Number} min
 * @param {Number} max
 * @example
 * console.log(random(1, 10))
 * @returns {Number} Number
 */
function random(min, max) {
  if (!max) return min
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

/* Exporting the function so that it can be used in other files. */
module.exports = random
