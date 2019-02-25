module.exports = {
  carPlate: require('greece-vehicle-plate').validate,
  postalCode: require('greece-postal-code').validate,
  AMKA: require('greece-amka').validate, // Greek social security number
  AFM: require('greece-afm'), // Greek tax registration numbers
  inn: require('russian-requisites-validator').inn, // ?
  ogrn: require('russian-requisites-validator').ogrn, // or require('ru-validation-codes').checkOgrn
  snils: require('ru-validation-codes').checkSnils,
  ogrnip: require('ru-validation-codes').checkOgrnip,
  bik: require('ru-validation-codes').checkBik,
};
