// Social Security number
const validateSNN = (value) => {
  const { isValidSsn } = require('se-ssn')
  const { ssn } = require('swe-validation')
  return isValidSsn(value) && ssn(value).isValid
}

// Corporation identity number

module.exports = {
  ssn: validateSNN,
};
