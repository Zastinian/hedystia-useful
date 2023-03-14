/**
 * Formats a number to a string with thousand separators.
 * @param {number} number - The number to format.
 * @example
 * console.log(formats.Number(10000))
 * @returns {string} The formatted string.
 */
function Number(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Formats a string to title case.
 * @param {string} str - The string to format.
 * console.log(formats.TitleCase("Example of text"))
 * @returns {string} The formatted string.
 */
function TitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Formats a string to sentence case.
 * @param {string} str - The string to format.
 * console.log(formats.SentenceCase("Example Of Text"))
 * @returns {string} The formatted string.
 */
function SentenceCase(str) {
  return str.toLowerCase().replace(/(^\s*\w|[\.\?!]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
}

/**
 * Formats a string to camel case.
 * @param {string} str - The string to format.
 * console.log(formats.CamelCase("Example of text"))
 * @returns {string} The formatted string.
 */
function CamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

/**
 * Formats a string to kebab case.
 * @param {string} str - The string to format.
 * console.log(formats.KebabCase("Example of text"))
 * @returns {string} The formatted string.
 */
function KebabCase(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Formats a string to snake case.
 * @param {string} str - The string to format.
 * console.log(formats.SnakeCase("Example of text"))
 * @returns {string} The formatted string.
 */
function SnakeCase(str) {
  return str.replace(/\s+/g, "_").toLowerCase();
}

/**
 * Formats a date as a string with a customizable order of day, month and year.
 * @param {Date} date - The date to format.
 * @param {string} [order="dmy"] - The order in which to display the day, month and year.
 *                                 Can be "dmy", "mdy", "ymd", "ydm", "myd" or "dym".
 * @example
 * console.log(formats.DateFor(new Date(), "dmy"))
 * console.log(formats.DateFor(new Date(), "mdy"))
 * console.log(formats.DateFor(new Date(), "ymd"))
 * console.log(formats.DateFor(new Date(), "ydm"))
 * console.log(formats.DateFor(new Date(), "myd"))
 * console.log(formats.DateFor(new Date(), "dym"))
 * @returns {string} A string representation of the date.
 */
function DateFor(date, order = "dmy") {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  let formattedDate;

  switch (order) {
    case "mdy":
      formattedDate = `${month}/${day}/${year}`;
      break;
    case "ymd":
      formattedDate = `${year}/${month}/${day}`;
      break;
    case "ydm":
      formattedDate = `${year}/${day}/${month}`;
      break;
    case "myd":
      formattedDate = `${month}/${year}/${day}`;
      break;
    case "dym":
      formattedDate = `${day}/${year}/${month}`;
      break;
    default:
      formattedDate = `${day}/${month}/${year}`;
  }

  return formattedDate;
}

/* Exporting the functions to be used in other files. */
module.exports = {
  Number,
  TitleCase,
  SentenceCase,
  CamelCase,
  KebabCase,
  SnakeCase,
  DateFor,
};
