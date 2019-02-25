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

module.exports = {
  polish,
  china: require('validid').cnid,
  hongKong: require('validid').hkid,
  taiwan: require('validid').twid,
  southKorea: require('validid').krid,
  czech: czechAndSlovakNationalID, // Czech Republic
  slovak: czechAndSlovakNationalID,
  german,
  // sriLanka: require("nic-info").nicInfo
}
