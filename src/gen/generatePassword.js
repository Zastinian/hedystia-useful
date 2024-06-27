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
function generatePassword(length = 10, options = {}) {
	const defaultCharset = [
		..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	];
	const specialCharset = [..."!@#$%^&*()_+~`|}{[]:;?><,./-=\\"];
	const chineseCharset = [
		..."的一是不了人我在有他这中大来上个国到说们为子和你地出道也时年得就那要下以生会自着之过家学对可她里后小么心多天而能好都然没日于起看发成只如事还用第样道想作种开美世家国们现向头文体每机应关天国将无事世记市北电气建社线四心二头立动主金二共品及与保公海斗连程今场共许设即采位直据口与层即最先然常才理共调张号段度节选区始张立住局农部加因速争条每最体将光斗形战象任如八传真明资周易共增领商层建白化总质压技共引非规将直气办约并设全标感层相身",
	];
	const japaneseCharset = [
		..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ",
	];
	const arabicCharset = [
		..."ابتثجحخدذرزسشصضطظعغفقكلمنهويءآأؤإئبةتجحخدذرزسشصضطظعغفقكلمنهويآأإ",
	];
	const rongoRongoCharset = [
		..."𐑀𐑁𐑂𐑃𐑄𐑅𐑆𐑇𐑈𐑉𐑊𐑋𐑌𐑍𐑎𐑏𐑐𐑑𐑒𐑓𐑔𐑕𐑖𐑗𐑘𐑙𐑚𐑛𐑜𐑝𐑞𐑟𐑠𐑡𐑢𐑣𐑤𐑥𐑦𐑧𐑨𐑩𐑪𐑫𐑬𐑭𐑮𐑯𐑰𐑱𐑲𐑳𐑴𐑵𐑶𐑷𐑸𐑹𐑺𐑻𐑼𐑽𐑾𐑿",
	];
	const cyrillicCharset = [
		..."АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
	];
	const greekCharset = [..."ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω"];
	const hebrewCharset = [..."אבגדהוזחטיכלמנסעפצקרשתךםןףץ"];

	let charset = [...defaultCharset];

	const addCharset = (defaultCharset, times) => {
		for (let i = 0; i < times; i++) {
			charset = charset.concat(defaultCharset);
		}
	};

	if (options.special?.active) {
		addCharset(specialCharset, options.special.times || 1);
	}
	if (options.chinese?.active) {
		addCharset(chineseCharset, options.chinese.times || 1);
	}
	if (options.japanese?.active) {
		addCharset(japaneseCharset, options.japanese.times || 1);
	}
	if (options.arabic?.active) {
		addCharset(arabicCharset, options.arabic.times || 1);
	}
	if (options.rongoRongo?.active) {
		addCharset(rongoRongoCharset, options.rongoRongo.times || 1);
	}
	if (options.cyrillic?.active) {
		addCharset(cyrillicCharset, options.cyrillic.times || 1);
	}
	if (options.greek?.active) {
		addCharset(greekCharset, options.greek.times || 1);
	}
	if (options.hebrew?.active) {
		addCharset(hebrewCharset, options.hebrew.times || 1);
	}

	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		password += charset[randomIndex];
	}

	return password;
}

module.exports = generatePassword;
