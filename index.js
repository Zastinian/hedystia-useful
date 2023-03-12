/* It's exporting all the functions in the file. */
exports.isValidNumber = require("./src/validation/isValidNumber");
exports.isEmptyString = require("./src/validation/isEmptyString");
exports.isValidUrl = require("./src/validation/isValidUrl");
exports.isValidEmail = require("./src/validation/isValidEmail");

exports.generateCaptcha = require("./src/gen/generateCaptcha");
exports.generateKey = require("./src/gen/generateKey");

exports.colorHashtag = require("./src/color/colorHashtag");
exports.colorZero = require("./src/color/colorZero");
exports.listLogColor = require("./src/color/listLogColor");

exports.formats = require("./src/utils/formats");
exports.millisecond = require("./src/utils/millisecond");
exports.wait = require("./src/utils/wait");
exports.log = require("./src/utils/log");
exports.type = require("./src/utils/type");
exports.random = require("./src/utils/random");
exports.randomItem = require("./src/utils/randomItem");
exports.symbols = require("./src/utils/symbols");

exports.version = require("./package.json").version;
