/**
 * Check what type is provided
 * @param {unknown} obj
 * @example
 * console.log(type(null))
 * console.log(type(undefined))
 * console.log(type(5))
 * console.log(type(true))
 * console.log(type('str'))
 * @returns {string} String
 */
function type(obj) {
	let undef;
	if (obj === undef) return "undefined";
	if (obj === null) return "null";

	const t = typeof obj;

	switch (t) {
		case "boolean":
		case "number":
		case "string":
		case "function":
			return t;
	}

	const tString = Object.prototype.toString;

	const str = tString.call(obj);

	switch (str) {
		case "[object Array]":
			return "array";
		case "[object RegExp]":
			return "regexp";
		case "[object Date]":
			return "date";
		case "[object Arguments]":
			return "arguments";
		case "[object Function]":
			return "function";
		case "[object Boolean]":
			return "boolean";
		case "[object Number]":
			return "number";
		case "[object String]":
			return "string";
		default:
			if (isBuffer(obj)) return "buffer";
			return "object";
	}
}

module.exports = type;
