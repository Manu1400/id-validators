const IDCardCheck2 = function (value) {
  const parseCnIdcard = require("parse-cn-idcard")
  let bool
  try {
    const obj = parseCnIdcard(value); // gender
    bool = true
  } catch {
    bool = false
  }
  return bool
}

function IDCardCheck(value = '') {
  const idIsValid = require("id-is-valid")
  //const IDCard = require('china-id-card').default
  //return IDCard(value).isVerified &&
  return require('validid').cnid(value) && IDCardCheck2(value) && idIsValid(value)
}

module.exports = {
  idcard: IDCardCheck
}
