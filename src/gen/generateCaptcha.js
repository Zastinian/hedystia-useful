/**
 * Generates a random captcha string with the specified length.
 * @param {number} [captchaLength=5] - The length of the captcha string to generate (defaults to 5).
 * @example
 * console.log(generateCaptcha(number))
 * @returns {string} The generated captcha string.
 */
function generateCaptcha(captchaLength = 5) {
	let captcha = "";
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	for (let i = 0; i < captchaLength; i++) {
		captcha = captcha + alphabets[Math.ceil(Math.random() * 25)];
	}
	return captcha;
}

module.exports = generateCaptcha;
