/**
 * Get a random element from an array
 * @param {Array} items
 * @example
 * console.log(randomItem(['a', 'b', 'c']))
 * @returns {String} String
 */

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

module.exports = randomItem;
