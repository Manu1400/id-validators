const postCode = function (value) {
  const dutchPostcodeRegex = require('dutch-postcode-regex')
  return dutchPostcodeRegex().test(value)
}

module.exports = {
  postCode,
};
