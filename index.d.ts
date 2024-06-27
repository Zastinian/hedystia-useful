/**
 * Contains all hex colors starting with #
 * @module colorHashtag
 * @param {string} colorHashtag.Color
 * @example
 * console.log(colorHashtag.Red)
 * @returns {string} String
 */
module colorHashtag {}

/**
 * Contains all hex colors starting with 0x
 * @module colorZero
 * @param {string} colorZero.Color
 * @example
 * console.log(colorZero.Red)
 * @returns {string} String
 */
module colorZero {}

/**
 * Contains the colors for the log section
 * @module listLogColor
 * @param {string} listLogColor.Color
 * @deprecated Use logColor
 * @example
 * log('Something', listLogColor.FgRed)
 * @returns {string} String
 */
module listLogColor {}

/**
 * Contains the colors for the log section
 * @module logColor
 * @param {string} logColor.Color
 * @example
 * log('Something', logColor.FgRed)
 * @returns {string} String
 */
module logColor {}

/**
 * Generates a random captcha string with the specified length.
 * @param {number} [captchaLength=5] - The length of the captcha string to generate (defaults to 5).
 * @example
 * console.log(generateCaptcha(number))
 * @returns {string} The generated captcha string.
 */
export function generateCaptcha(captchaLength?: number): string;

/**
 * Generates a unique key with the specified prefix.
 * @param {string} [prefix] - The prefix to use for the key (defaults to "PREFIX").
 * @example
 * console.log(generateKey('PREFIX'))
 * @returns {string} The generated key.
 */
export function generateKey(prefix?: string): string;

/**
 * Generates a random password of the specified length using specified character sets.
 * @param {number} [length=10] - The length of the password to generate.
 * @param {Object} [options] - Options to specify character sets and their required usage.
 * @param {Object} [options.special] - Include special characters with times to force.
 * @param {Object} [options.chinese] - Include Chinese characters with times to force.
 * @param {Object} [options.japanese] - Include Japanese characters with times to force.
 * @param {Object} [options.arabic] - Include Arabic characters with times to force.
 * @param {Object} [options.rongoRongo] - Include Rongo Rongo characters with times to force.
 * @param {Object} [options.cyrillic] - Include Cyrillic characters with times to force.
 * @param {Object} [options.greek] - Include Greek characters with times to force.
 * @param {Object} [options.hebrew] - Include Hebrew characters with times to force.
 * @example
 * console.log(generatePassword(10, { chinese: { active: true, times: 2 }, japanese: { active: true, times: 1 } }))
 * @returns {string} The generated password.
 */
export function generatePassword(length?: number, options?: {
    special?: {
        active?: boolean;
        times?: number;
    };
    chinese?: {
        active?: boolean;
        times?: number;
    };
    japanese?: {
        active?: boolean;
        times?: number;
    };
    arabic?: {
        active?: boolean;
        times?: number;
    };
    rongoRongo?: {
        active?: boolean;
        times?: number;
    };
    cyrillic?: {
        active?: boolean;
        times?: number;
    };
    greek?: {
        active?: boolean;
        times?: number;
    };
    hebrew?: {
        active?: boolean;
        times?: number;
    };
}): string;

/**
 * Formats a number to a string with thousand separators.
 * @param {number} number - The number to format.
 * @example
 * console.log(formats.Number(10000))
 * @returns {string} The formatted string.
 */
export function Number(number: number): string;

/**
 * Formats a string to title case.
 * @param {string} str - The string to format.
 * console.log(formats.TitleCase("Example of text"))
 * @returns {string} The formatted string.
 */
export function TitleCase(str: string): string;

/**
 * Formats a string to sentence case.
 * @param {string} str - The string to format.
 * console.log(formats.SentenceCase("Example Of Text"))
 * @returns {string} The formatted string.
 */
export function SentenceCase(str: string): string;

/**
 * Formats a string to camel case.
 * @param {string} str - The string to format.
 * console.log(formats.CamelCase("Example of text"))
 * @returns {string} The formatted string.
 */
export function CamelCase(str: string): string;

/**
 * Formats a string to kebab case.
 * @param {string} str - The string to format.
 * console.log(formats.KebabCase("Example of text"))
 * @returns {string} The formatted string.
 */
export function KebabCase(str: string): string;

/**
 * Formats a string to snake case.
 * @param {string} str - The string to format.
 * console.log(formats.SnakeCase("Example of text"))
 * @returns {string} The formatted string.
 */
export function SnakeCase(str: string): string;

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
export function DateFor(date: Date, order?: string): string;

/**
 * Make a log with or without color
 * @param {string} text
 * @param {string} color
 * @example
 * log('Something')
 * log('Something', logColor.FgRed)
 * @returns {void} void
 */
export function log(text: string, color: string): void;

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
export function millisecond(ms: string): number;

/**
 * Get a random number between 2 numbers
 * @param {number} min
 * @param {number} max
 * @example
 * console.log(random(1, 10))
 * @returns {number} Number
 */
export function random(min: number, max: number): number;

/**
 * Get a random element from an array
 * @param {Array} items
 * @example
 * console.log(randomItem(['a', 'b', 'c']))
 * @returns {string} String
 */
export function randomItem(items: Array): string;

/**
 * Returns a selected symbol
 * @module colorZero
 * @param {string} symbols.Symbol
 * @example
 * console.log(symbols.tick)
 * @returns {string} String
 */
module colorZero {}

/**
 * Check what type is provided
 * @param {any} obj
 * @example
 * console.log(type(null))
 * console.log(type(undefined))
 * console.log(type(5))
 * console.log(type(true))
 * console.log(type('str'))
 * @returns {string} String
 */
export function type(obj: any): string;

/**
 * A function that returns a promise that resolves after a specified delay.
 * @module wait
 * @param {number} [delay=0] - The delay, in milliseconds, before the promise should resolve.
 * @example
 * async function async() {
 *  await wait(2000)
 *  console.log("Something")
 * }
 * async()
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 */
module wait {}

/**
 * Check if the text is not empty
 * @param {string} value
 * @example
 * console.log(isEmptyString('Something'))
 * @returns {boolean} Boolean
 */
export function isEmptyString(value: string): boolean;

/**
 * Check if it is a email
 * @param {string} email
 * @example
 * console.log(isValidEmail('test@email.com'))
 * @returns {boolean} Boolean
 */
export function isValidEmail(email: string): boolean;

/**
 * Check if it is a number
 * @param {number} number
 * @example
 * console.log(isValidNumber(number))
 * @returns {boolean} Boolean
 */
export function isValidNumber(number: number): boolean;

/**
 * Check that the text is a link | Only texts with http: or https:
 * @param {string} content
 * @param {Array} whitelist
 * @example
 * console.log(isValidUrl('https://google.com'))
 * @returns {boolean} Boolean
 */
export function isValidUrl(content: string, whitelist: Array): boolean;
