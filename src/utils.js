// Europe
// const { verify } = require('euro-banknote-serialnumber')

// module.exports.euroBanknoteSN = verify

// https://fr.wikipedia.org/wiki/Aadhaar
const { isValidNumber } = require('aadhaar-validator').isValidNumber

module.exports.aadhaar = isValidNumber

module.exports.videos = {
  xvideos: require('xvideos-valid').isValid,
}

module.exports.currency = {
  code: require('is-currency-code'),
  number: require('currency-codes').number,
}

module.exports.container = {
  ISO6346: require('is-container'),
}

module.exports.studentId = {
  Q1129925: require('@open-source-uc/validate-uc-number'), // Pontifical Catholic University of Chile
  // Q19745908: ... require('@inforlabs/npm-typed')
}
