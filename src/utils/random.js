/**
 * @description Get a random number between 2 numbers
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

module.exports = random
