const { validateARBN, validateTFN, validateMedicareNumber } = require('au-bn-validator')

// Australian Business Number (ABN)
const ABN = function (value) {
  const { validateABN } = require('au-bn-validator')
  const { isValidABN } = require("abnacn-validator")
  return validateABN(value) && isValidABN(value)
}

// Australian Company Number (ACN)
const ACN = function (value) {
  const { validateACN } = require('au-bn-validator')
  const { isValidACN } = require("abnacn-validator")
  return validateACN(value) && isValidACN(value)
}

module.exports = {
  ABN,
  ACN,
  ARBN: validateARBN, // Australian Registered Body Number (ARBN)
  TFN: validateTFN, // Australian Tax File Number (TFN)
  medicareNumber: validateMedicareNumber // Australian Medicare Number
}
