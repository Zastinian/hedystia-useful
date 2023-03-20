/**
 * Generates a random captcha string with the specified length.
 * @param {number} [captchaLength=5] - The length of the captcha string to generate (defaults to 5).
 * @example
 * console.log(generateCaptcha(number))
 * @returns {String} The generated captcha string.
 */
function generateCaptcha(captchaLength) {
  var captcha = "",
    alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    captchaLength = captchaLength || 5;
  for (var i = 0; i < captchaLength; i++) {
    captcha = captcha + alphabets[Math.ceil(Math.random() * 25)];
  }
  return captcha;
}

module.exports = generateCaptcha;
