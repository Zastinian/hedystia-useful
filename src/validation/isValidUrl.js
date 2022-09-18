/**
 * @description Check that the text is a link | Only texts with http: or https:
 * @author Zastinian
 * @param {String} content
 * @param {Array} whitelist
 * @example
 * console.log(isValidUrl('https://google.com'))
 * @returns {Boolean} Boolean
 */

function isValidUrl(content) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  )
  return !!pattern.test(content)
}

module.exports = isValidUrl
