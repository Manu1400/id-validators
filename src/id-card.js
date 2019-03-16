const czechAndSlovakNationalID = (value) => {
  const { rodnecislo } = require('rodnecislo')
  return rodnecislo(value).isValid()
}

const german = (value) => {
  const Personalausweis = require('personalausweis')
  let bool
  try {
    const obj = new Personalausweis(value)
    bool = true
  } catch (error) {
    bool = false
  }
  return bool
}

const polish = (value) => {
  const isPeselValid = require('pesel-check')
  // For old ID card numbers (without control digit) validator returns always FALSE.
  const validate = require('polish-id-card-validate')
  return isPeselValid(value) && validate(value)
}

const taiwan = (value) => {
  value = value || ''
  const taiwanId = require("taiwan-id")
  const validid = require('validid')
  return taiwanId.check(value) && validid.twid(value)
}

const southKorea = (value) => {
  value = value || ''
  const validid = require("validid")
  return validid.krid(value)
}

module.exports = {
  polish,
  china: require('./CN/CN').idcard,
  //hongKong: validid.hkid,
  taiwan,
  southKorea,
  czech: czechAndSlovakNationalID, // Czech Republic
  slovak: czechAndSlovakNationalID,
  german,
  malaysian: require('mykad').isValid,
  norwegian: require('./NO/NO').ssn,
  //iran: require('iranian-ssn').validate // iranian national code
  // sriLanka: require("nic-info").nicInfo
}
