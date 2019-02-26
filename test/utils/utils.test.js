const assert = require('assert')
const chai = require('chai')

const { utils } = require('./../../src')

// todo : add timeout https://mochajs.org/#suite-level

describe('euro banknote serial number', () => {
  it.todo('empty string', () => {
    chai.expect(utils.euroBanknoteSN('')).to.equal(false)
  })

  // TODO: eslint -> create issue
  test.todo('', () => {
  })

  it.todo('valid serial number', () => {
    // chai.expect(utils.euroBanknoteSN('')).to.equal(true)
  })
})
