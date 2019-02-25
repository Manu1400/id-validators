module.exports = {
  carPlate: require('pl-numberplates').isValid, // https://www.npmjs.com/package/pl-registration-plate-validator installed
  regon: require('validate-polish-regon'),
  passport: require('validators-pl').isValidPassportNo,
  nip: require('validators-pl').isValidNip,
  // continue : https://www.npmjs.com/package/validators-pl
};
