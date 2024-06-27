/**
 * Contains the colors for the log section
 * @module listLogColor
 * @param {string} listLogColor.Color
 * @deprecated Use logColor
 * @example
 * log('Something', listLogColor.FgRed)
 * @returns {string} String
 */
module.exports = {
	Reset: "\x1b[0m",
	Bright: "\x1b[1m%s\x1b[0m",
	Dim: "\x1b[2m%s\x1b[0m",
	Underscore: "\x1b[4m%s\x1b[0m",
	Blink: "\x1b[5m%s\x1b[0m",
	Reverse: "\x1b[7m%s\x1b[0m",
	Hidden: "\x1b[8m%s\x1b[0m",

	FgBlack: "\x1b[30m%s\x1b[0m",
	FgRed: "\x1b[31m%s\x1b[0m",
	FgGreen: "\x1b[32m%s\x1b[0m",
	FgYellow: "\x1b[33m%s\x1b[0m",
	FgBlue: "\x1b[34m%s\x1b[0m",
	FgMagenta: "\x1b[35m%s\x1b[0m",
	FgCyan: "\x1b[36m%s\x1b[0m",
	FgWhite: "\x1b[37m%s\x1b[0m",
	FgGray: "\x1b[90m%s\x1b[0m",
	FgBrightRed: "\x1b[91m%s\x1b[0m",
	FgBrightGreen: "\x1b[92m%s\x1b[0m",
	FgBrightYellow: "\x1b[93m%s\x1b[0m",
	FgBrightBlue: "\x1b[94m%s\x1b[0m",
	FgBrightMagenta: "\x1b[95m%s\x1b[0m",
	FgBrightCyan: "\x1b[96m%s\x1b[0m",
	FgBrightWhite: "\x1b[97m%s\x1b[0m",

	BgBlack: "\x1b[40m%s\x1b[0m",
	BgRed: "\x1b[41m%s\x1b[0m",
	BgGreen: "\x1b[42m%s\x1b[0m",
	BgYellow: "\x1b[43m%s\x1b[0m",
	BgBlue: "\x1b[44m%s\x1b[0m",
	BgMagenta: "\x1b[45m%s\x1b[0m",
	BgCyan: "\x1b[46m%s\x1b[0m",
	BgWhite: "\x1b[47m%s\x1b[0m",
	BgGray: "\x1b[100m%s\x1b[0m",
	BgBrightRed: "\x1b[101m%s\x1b[0m",
	BgBrightGreen: "\x1b[102m%s\x1b[0m",
	BgBrightYellow: "\x1b[103m%s\x1b[0m",
	BgBrightBlue: "\x1b[104m%s\x1b[0m",
	BgBrightMagenta: "\x1b[105m%s\x1b[0m",
	BgBrightCyan: "\x1b[106m%s\x1b[0m",
	BgBrightWhite: "\x1b[107m%s\x1b[0m",
};
