const assert = require('assert')
const chai = require('chai')
const { idCard } = require('./../../src')

describe('German ID Card', () => {
  it('valid ID Card', () => {
    const validID = '1220001297D640812517103198'
    chai.expect(idCard.german(validID)).to.equal(true)
  })

  it('invalid ID Card', () => {
    chai.expect(idCard.german('1220001297')).to.equal(false)
  })
})
