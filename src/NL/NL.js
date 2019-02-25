const dutchPostcodeRegex = require('dutch-postcode-regex')

module.exports = {
  postCode: dutchPostcodeRegex().test,
};
