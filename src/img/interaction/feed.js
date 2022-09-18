/**
 * @description Generates the image of a feed
 * @author Zastinian
 * @example
 * feed().then((link) => console.log(link))
 * const link = await feed()
 * @returns {String} String
 */
async function feed() {
  const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
  const response = await fetch("https://nekos.life/api/v2/img/feed")
  const body = await response.json()
  return body.url
}

module.exports = feed
