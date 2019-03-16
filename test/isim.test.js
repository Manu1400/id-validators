/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

const { expect } = require('chai')

const ISMN = require('./../src/isim/ISMN')

// examples from https://fr.wikipedia.org/wiki/International_Standard_Music_Number
describe('International Standard Music Number validation', () => {
  it('valid ISBN10', (valid = 'M-060-11561-5') => {
    expect(ISMN.ISMN(valid)).to.be.true
    expect(ISMN.ISMN10(valid)).to.be.true
  })

  it('valid ISBN-13/979', (valid = '979-0-7284-1743-3') => {
    expect(ISMN.ISMN(valid)).to.be.true
    expect(ISMN.ISMN13(valid)).to.be.true
  })
})
