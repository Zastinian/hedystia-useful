/**
 * @description Generate a captcha
 * @author Zastinian
 * @param {Number} captchaLength
 * @example
 * console.log(generateCaptcha(number))
 * @returns {String} String
 */
function generateCaptcha(captchaLength) {
  var captcha = "",
    alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    captchaLength = captchaLength || 5
  for (var i = 0; i < captchaLength; i++) {
    captcha = captcha + alphabets[Math.ceil(Math.random() * 25)]
  }
  return captcha
}

module.exports = generateCaptcha
