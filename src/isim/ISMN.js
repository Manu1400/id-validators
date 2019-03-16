//const onInterval = require('validate.io-interval')

const ISMN10 = function (value) {
  return /^M(\d{9}|(-\d{4}-\d{4}-\d)|(-\d{3}-\d{5}-\d)|(\s\d{4}\s\d{4}\s\d))$/.test(value)
}

const ISMN13 = function (value) {
  return /^979((0\d{8})|(-0-\d{4}-\d{4}-)|(\s0\s\d{4}\s\d{4}\s))\d$/.test(value)
}

// https://github.com/formvalidation/formvalidation/commit/e9a9ed39890578ef6b927050743fe33321880935
module.exports = {
  ISMN(value) { return ISMN10(value) || ISMN13(value) },
  ISMN10,
  ISMN13
}
