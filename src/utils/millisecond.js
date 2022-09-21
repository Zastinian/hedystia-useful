/**
 * It takes a string and returns a number of milliseconds
 * @param ms - The time in milliseconds.
 * @returns The number of milliseconds in the given time.
 */
/**
 * @description Converts the indicated time to milliseconds
 * @author Zastinian
 * @param {String} ms
 * @example
 * console.log(millisecond('1000 ms'))
 * console.log(millisecond('1 s'))
 * console.log(millisecond('1 m'))
 * console.log(millisecond('1 h'))
 * console.log(millisecond('1 d'))
 * console.log(millisecond('1 w'))
 * console.log(millisecond('1 y'))
 * @returns {Number} Number
 */
function millisecond(ms) {
  var type = typeof ms,
    amount,
    match

  if ("number" === type) return ms
  if ("string" !== type) return 0
  if (!isNaN(+ms)) return +ms

  var regex = new RegExp(
    "^((?:\\d+)?\\.?\\d+) *(" +
      [
        "milliseconds?",
        "msecs?",
        "ms",
        "seconds?",
        "secs?",
        "s",
        "minutes?",
        "mins?",
        "m",
        "hours?",
        "hrs?",
        "h",
        "days?",
        "d",
        "weeks?",
        "wks?",
        "w",
        "years?",
        "yrs?",
        "y",
      ].join("|") +
      ")?$",
    "i"
  )

  if (ms.length > 10000 || !(match = regex.exec(ms))) return 0

  amount = parseFloat(match[1])

  var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7,
    year = day * 365

  switch (match[2].toLowerCase()) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return amount * year

    case "weeks":
    case "week":
    case "wks":
    case "wk":
    case "w":
      return amount * week

    case "days":
    case "day":
    case "d":
      return amount * day

    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return amount * hour

    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return amount * minute

    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return amount * second

    default:
      return amount
  }
}

/* Exporting the function `millisecond` to be used in other files. */
module.exports = millisecond
