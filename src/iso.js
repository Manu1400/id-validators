const mathInterval = (value) => {
  const intervalParse = require('math-interval-parser').default
  return intervalParse(value) !== null
}

const urn = (value) => {
  const { extract } = require('identifiers-urn')
  const result = extract(value)[0] || ''
  return result === value && value !== ''
}

module.exports = {
  mathInterval,
  urn
};
// alias
//module.exports['ISO 31-11:1992'] = module.exports['iso31-11']
