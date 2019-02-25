'use strict'

const assert = require('assert');
const chai = require('chai')
//const validation = require('./../index') // require('../id-validators')
const {utils} = require('./../index')

// todo : add timeout https://mochajs.org/#suite-level

describe('euro banknote serial number', function() {
  it('empty string', function() {
    chai.expect(utils.euroBanknoteSN('')).to.equal(false)
  })

  it('valid serial number', function() {
    //chai.expect(utils.euroBanknoteSN('')).to.equal(true)
  })
})
