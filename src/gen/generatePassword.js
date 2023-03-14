/**
 * @description Generates a random password of the specified length.
 * @author Zastinian
 * @param {number} [length=10] - The length of the password to generate.
 * @example
 * console.log(generatePassword(10))
 * @returns {string} The generated password.
 */
function generatePassword(length = 10) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=\\";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

module.exports = generatePassword;
