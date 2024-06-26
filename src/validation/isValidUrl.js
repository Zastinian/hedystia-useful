/**
 * Check that the text is a link | Only texts with http: or https:
 * @param {string} content
 * @param {Array} whitelist
 * @example
 * console.log(isValidUrl('https://google.com'))
 * @returns {boolean} Boolean
 */

function isValidUrl(content, whitelist = []) {
	const regex =
		/(?:(?:https?|ftp|file|http?):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
	const match = regex.test(content);
	let urls = content.match(regex);
	urls = urls.filter((url) => !whitelist.find((wurl) => url.includes(wurl)));
	if (urls.length === 0) return false;
	return match;
}

module.exports = isValidUrl;
