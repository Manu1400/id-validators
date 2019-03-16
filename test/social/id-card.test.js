const assert = require('assert')
const chai = require('chai')
const idCard = require('./../../src/id-card')

describe('German ID Card', () => {
  it('valid ID Card', () => {
    const validID = '1220001297D640812517103198'
    chai.expect(idCard.german(validID)).to.equal(true)
  })

  it('invalid ID Card', () => {
    chai.expect(idCard.german('1220001297')).to.equal(false)
  })
})

describe('#taiwan', () => {
  it('valid ID Card from Taiwan', () => {
    const { generate} = require('taiwanid')
    const validID = generate()

    chai.expect(idCard.taiwan(validID)).to.equal(true)
  })
})

describe('possible fødselsnummer (Norwegian SSN)', () => {
  const { generate } = require("fodselsnummer-generator")

  test.each(generate())(
    'returns a generated ID card %p',
    (validID) => {
      chai.expect(idCard.norwegian(validID)).to.equal(true)
    },
  );
})

//describe('run all methodes', () => {
  //const tab = Object.keys(idCard).map(key => idCard[key]('A5555550'))
  //console.log(tab) // undefined -> FAIL

  //const tabA = Object.keys(idCard).map(key => idCard[key]())
  //console.log(tabA) // undefined -> FAIL

  //const tabB = Object.keys(idCard).map(key => idCard[key](''))
  //console.log(tabB) // undefined -> FAIL
//})
