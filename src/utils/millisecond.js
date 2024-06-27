/**
 * Converts the indicated time to milliseconds
 * @param {string} ms
 * @example
 * console.log(millisecond('1000 ms'))
 * console.log(millisecond('1 s'))
 * console.log(millisecond('1 m'))
 * console.log(millisecond('1 h'))
 * console.log(millisecond('1 d'))
 * console.log(millisecond('1 w'))
 * console.log(millisecond('1 y'))
 * @returns {number} Number
 */

function millisecond(ms) {
	const type = typeof ms;
	let amount;
	let match;

	if ("number" === type) return ms;
	if ("string" !== type) return 0;
	if (!Number.isNaN(+ms)) return +ms;

	const regex = new RegExp(
		`^((?:\\d+)?\\.?\\d+) *(${[
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
		].join("|")})?$`,
		"i",
	);

	if (ms.length > 10000 || !(match = regex.exec(ms))) return 0;

	amount = Number.parseFloat(match[1]);

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const year = day * 365;

	switch (match[2].toLowerCase()) {
		case "years":
		case "year":
		case "yrs":
		case "yr":
		case "y":
			return amount * year;

		case "weeks":
		case "week":
		case "wks":
		case "wk":
		case "w":
			return amount * week;

		case "days":
		case "day":
		case "d":
			return amount * day;

		case "hours":
		case "hour":
		case "hrs":
		case "hr":
		case "h":
			return amount * hour;

		case "minutes":
		case "minute":
		case "mins":
		case "min":
		case "m":
			return amount * minute;

		case "seconds":
		case "second":
		case "secs":
		case "sec":
		case "s":
			return amount * second;

		default:
			return amount;
	}
}

module.exports = millisecond;
