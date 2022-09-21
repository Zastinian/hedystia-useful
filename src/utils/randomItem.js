/**
 * It takes an array as an argument and returns a random item from that array
 * @param items - The array of items to choose from.
 * @returns a random item from the array.
 */
/**
 * @description It takes an array as an argument and returns a random item from that array
 * @author Zastinian
 * @param {Array} items
 * @example
 * console.log(randomItem(['a', 'b', 'c']))
 * @returns {String} String
 */
function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

/* Exporting the function so that it can be used in other files. */
module.exports = randomItem
