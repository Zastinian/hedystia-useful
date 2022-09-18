/**
 * @description Generates the image of a kiss
 * @author Zastinian
 * @example
 * kiss().then((link) => console.log(link))
 * const link = await kiss()
 * @returns {String} String
 */
async function kiss() {
  const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
  const response = await fetch("https://nekos.life/api/v2/img/kiss")
  const body = await response.json()
  return body.url
}

module.exports = kiss
