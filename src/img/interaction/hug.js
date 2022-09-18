/**
 * @description Generates the image of a hug
 * @author Zastinian
 * @example
 * hug().then((link) => console.log(link))
 * const link = await hug()
 * @returns {String} String
 */
async function hug() {
  const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
  const response = await fetch("https://nekos.life/api/v2/img/hug")
  const body = await response.json()
  return body.url
}

module.exports = hug
