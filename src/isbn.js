const onInterval = require('validate.io-interval')

const isIsbn10 = (value = '') => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const isbn10a = require('isbn2')(value)
  return isbn10a.isIsbn10
}

const isIsbn13 = (value = '') => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const isbn13a = require('isbn2')(value)
  return isbn13a.isIsbn13
}

const isIsbn = value => isIsbn10(value) || isIsbn13(value)

// https://fr.wikipedia.org/wiki/Domaine_ISBN
const getDomain = (value = '') => {
  const { parse } = require('isbn-utils')

  return parse(value) === null ? '' : Number(parse(value).codes.group)
}

const checkDomain978 = domain => (domain === 0 || onInterval(domain, 10, 12))

const checkDomain979 = domain => {
  domain = Number(domain)
  return onInterval(domain, 0, 5) || domain === 7 || onInterval(domain, 80, 94) ||
    onInterval(domain, 600, 649) || onInterval(domain, 950, 989) ||
    onInterval(domain, 9900, 9989) || onInterval(domain, 99900, 99999)
}

const checkDomain = (domain, isbn = '') => {
  if (isbn.substr(0, 3) === "978") {
    return checkDomain978(domain)
  }
  if (isbn.substr(0, 3) === "979") {
    return checkDomain979(domain)
  }
  return true
}

const checkIsbn = value => {
  const domain = getDomain(value)
  // TODO:
  //   isIsbn13(value)
  return checkDomain(domain, value) // isIsbn(value) &&
}

module.exports = {
  isbn10: isIsbn10,
  isbn13: isIsbn13,
  isbn: isIsbn,
  getDomain,
  checkDomain,
  checkIsbn
}
