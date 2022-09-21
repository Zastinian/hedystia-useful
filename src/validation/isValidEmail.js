/**
 * If the email address contains no @ symbol, or more than one @ symbol, or is longer than 256
 * characters, or the account name is longer than 64 characters, or the domain name is longer than 255
 * characters, or any of the domain parts are longer than 63 characters, or the email fails the regex
 * test, then the email address is invalid.
 * @param email - The email address to validate.
 * @returns A boolean value.
 */
/**
 * @description If the email address contains no @ symbol, or more than one @ symbol, or is longer than 256
 * characters, or the account name is longer than 64 characters, or the domain name is longer than 255
 * characters, or any of the domain parts are longer than 63 characters, or the email fails the regex
 * test, then the email address is invalid.
 * @author Zastinian
 * @param {String} email
 * @example
 * console.log(isValidEmail('test@email.com'))
 * @returns {Boolean} Boolean
 */
function isValidEmail(email) {
  if (!email) return false
  var emailParts = email.split("@")
  if (emailParts.length !== 2) return false
  var account = emailParts[0]
  var address = emailParts[1]
  if (account.length > 64) return false
  else if (address.length > 255) return false
  var domainParts = address.split(".")
  if (
    domainParts.some(function (part) {
      return part.length > 63
    })
  )
    return false
  var tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  if (!tester.test(email)) return false
  return true
}

/* Exporting the function to be used in other files. */
module.exports = isValidEmail
