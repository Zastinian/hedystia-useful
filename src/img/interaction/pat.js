/**
 * @description Generates the image of a pat
 * @author Zastinian
 * @example
 * pat().then((link) => console.log(link))
 * const link = await pat()
 * @returns {String} String
 */
async function pat() {
  const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
  const response = await fetch("https://nekos.life/api/v2/img/pat")
  const body = await response.json()
  return body.url
}

module.exports = pat
