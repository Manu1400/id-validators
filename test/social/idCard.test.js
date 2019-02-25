'use strict'

const assert = require('assert')
const chai = require('chai')
const {idCard} = require('./../../index')

describe('German ID Card', function() {
  it('valid ID Card', function() {
    const validID = '1220001297D640812517103198'
    chai.expect(idCard.german(validID)).to.equal(true)
  })

  it('invalid ID Card', function() {
    chai.expect(idCard.german('1220001297')).to.equal(false)
  })
})
