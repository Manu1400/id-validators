/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

//const assert = require('assert')
const { expect } = require('chai')

const isbn = require('./../src/isbn')

describe('ISBN validation', () => {
  it('parse ISBN and extract ISBN domain', () => {
    expect(isbn.getDomain('978-600-119-125-1')).to.equal(600) // groupname: "Iran"

    expect(isbn.checkDomain(isbn.getDomain('978-600-119-125-1'))).to.equal(true)
  })

  // TODO: Add 99937 	Macao

  // https://en.wikipedia.org/wiki/List_of_group-1_ISBN_publisher_codes
  // https://en.wikipedia.org/wiki/List_of_group-0_ISBN_publisher_codes
  // .codes.publisher; -> ?

  //it('ISBN-13/979, national codes', () => {
    //expect(isbn.checkIsbn('979-10-90636-07-1')).to.equal(true)
    //expect(isbn.checkIsbn('979-11-86178-14-0')).to.equal(true)
    //expect(isbn.checkIsbn('979-12-200-0852-5')).to.equal(true)
  //})
})

describe('ISBN-13/979, International Standard Music Number validation', () => {
  // example from https://fr.wikipedia.org/wiki/International_Standard_Music_Number
  it('valid ISMN', () => {
    // new prefix (> 2009) : 979-0
    //expect(isbn.isbn13('979-0-7284-1743-3')).to.equal(false)
    expect(isbn.checkDomain('979', '979-0-7284-1743-3')).to.equal(true)
    expect(isbn.checkIsbn('979-0-7284-1743-3')).to.be.true
  })
})
