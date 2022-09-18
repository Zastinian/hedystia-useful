/**
 * @description Generate a key
 * @author Zastinian
 * @param {String} prefix
 * @example
 * console.log(generateKey('PREFIX'))
 * @returns {String} String
 */
function generateKey(prefix) {
  if (!prefix) {
    const key = "0x" + "PREFIX" + "x" + Date.now()
    return key
  }
  const key = "0x" + prefix + "x" + Date.now()
  return key
}

module.exports = generateKey
