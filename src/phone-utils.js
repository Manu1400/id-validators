// can use
// https://www.wikidata.org/wiki/Property:P2258
// https://www.wikidata.org/wiki/Property:P2259
const imsi = (value) => {
  const { grok } = require('imsi-grok')

  let bool
  try {
    grok(value)
    bool = true
  } catch (error) {
    bool = false
  }
  return bool
}

module.exports = {
  imsi,
  imei: require('imei').isValid,
};
