const { ISBN } = require('isbn2')

const Isbn10 = value => ISBN.parse(value).isIsbn10()
const Isbn13 = value => ISBN.parse(value).isIsbn13()

module.exports = {
  Isbn10,
  Isbn13,
}
