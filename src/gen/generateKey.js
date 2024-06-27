/**
 * Generates a unique key with the specified prefix.
 * @param {string} [prefix] - The prefix to use for the key (defaults to "PREFIX").
 * @example
 * console.log(generateKey('PREFIX'))
 * @returns {string} The generated key.
 */
function generateKey(prefix) {
	if (!prefix) {
		const key = `0xPREFIXx${Date.now()}`;
		return key;
	}
	const key = `0x${prefix}x${Date.now()}`;
	return key;
}

module.exports = generateKey;
