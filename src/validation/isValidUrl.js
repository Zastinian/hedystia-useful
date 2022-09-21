/**
 * It checks if the content is a valid URL by checking if it matches the pattern of a URL.
 * @param content - The content to be validated.
 * @returns A boolean value.
 */
/**
 * @description It checks if the content is a valid URL by checking if it matches the pattern of a URL.
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

/* Exporting the function to be used in other files. */
module.exports = isValidUrl
