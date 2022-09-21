/**
 * It returns the type of the object passed to it
 * @param obj - The object to test
 * @returns The type of the object.
 */
/**
 * @description It returns the type of the object passed to it
 * @author Zastinian
 * @param {any} obj
 * @example
 * console.log(type(null))
 * console.log(type(undefined))
 * console.log(type(5))
 * console.log(type(true))
 * console.log(type('str'))
 * @returns {String} String
 */
function type(obj) {
  var undef
  if (obj === undef) return "undefined"
  if (obj === null) return "null"

  var t = typeof obj

  switch (t) {
    case "boolean":
    case "number":
    case "string":
    case "function":
      return t
  }

  var toString = Object.prototype.toString

  var str = toString.call(obj)

  switch (str) {
    case "[object Array]":
      return "array"
    case "[object RegExp]":
      return "regexp"
    case "[object Date]":
      return "date"
    case "[object Arguments]":
      return "arguments"
    case "[object Function]":
      return "function"
    case "[object Boolean]":
      return "boolean"
    case "[object Number]":
      return "number"
    case "[object String]":
      return "string"
    default:
      if (isBuffer(obj)) return "buffer"
      return "object"
  }
}

/* Exporting the function `type` as a module. */
module.exports = type
