const assert = require('assert')
const chai = require('chai')

const iso = require('./../../src/iso')

describe('ISO module', () => {
  it('iso31-11 valid', () => {
    chai.expect(iso.mathInterval('[-10,10)')).to.equal(true)
  })

  it('iso31-11 invalid', () => {
    chai.expect(iso.mathInterval('[2,-2]')).to.equal(false)
  })
})
