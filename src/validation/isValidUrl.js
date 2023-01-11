/**
 * @description Check that the text is a link | Only texts with http: or https:
 * @author Zastinian
 * @param {String} content
 * @param {Array} whitelist
 * @example
 * console.log(isValidUrl('https://google.com'))
 * @returns {Boolean} Boolean
 */

function isValidUrl(content, whitelist = []) {
  let regex =
    /(?:(?:https?|ftp|file|http?):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
  const match = regex.test(content)
  let urls = content.match(regex)
  urls = urls.filter((url) => !whitelist.find((wurl) => url.includes(wurl)))
  if (urls.length === 0) return false
  return match
}

module.exports = isValidUrl
