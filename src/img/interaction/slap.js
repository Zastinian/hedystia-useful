/**
 * @description Generates the image of a slap
 * @author Zastinian
 * @example
 * slap().then((link) => console.log(link))
 * const link = await slap()
 * @returns {String} String
 */
async function slap() {
  const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
  const response = await fetch("https://nekos.life/api/v2/img/slap")
  const body = await response.json()
  return body.url
}

module.exports = slap
