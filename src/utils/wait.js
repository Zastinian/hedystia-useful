/**
 * A function that returns a promise that resolves after a specified delay.
 * @module wait
 * @param {number} [delay=0] - The delay, in milliseconds, before the promise should resolve.
 * @example
 * async function async() {
 *  await wait(2000)
 *  console.log("Something")
 * }
 * async()
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 */
module.exports = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));
