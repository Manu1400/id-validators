const assert = require('assert')
const chai = require('chai')

const { utils } = require('./../../src/index')

// todo : add timeout https://mochajs.org/#suite-level

describe('euro banknote serial number', () => {
  it.todo('empty string', () => {
    chai.expect(utils.euroBanknoteSN('')).to.equal(false)
  })

  it.todo('valid serial number', () => {
    // chai.expect(utils.euroBanknoteSN('')).to.equal(true)
  })
})
