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

/* Exporting the functions to be used in other files. */
module.exports = {
  Number,
  TitleCase,
  SentenceCase,
  CamelCase,
  KebabCase,
  SnakeCase,
};
