 const { mathInterval, urn, URNtoURL } = require('./../../src/iso')

describe('#mathInterval', () => {
  it('iso31-11 valid', () => {
    expect(mathInterval('[-10,10)')).toBe(true)
  })

  it('iso31-11 invalid', () => {
    expect(mathInterval('[2,-2]')).toBe(false)
  })
})

describe('#URNtoURL, URN -> URL', () => {
  const { isUri } = require('valid-url')

  it('urn:nbn', () => {
    // check URL format
    expect(isUri(URNtoURL('urn:nbn:de:kobv:11-100238157'))).toEndWith('100238157')
    expect(isUri(URNtoURL('urn:nbn:de:bvb:19-146642'))).toBeString()
    expect(isUri(URNtoURL('urn:nbn:de:bvb:19-146642'))).toBeString()
  })
})

describe('#urn, Uniform Resource Name (URN) valid', () => {
  it('URN valid: cases from IETF standarts', () => {
    expect(urn('urn:ietf:rfc:2141')).toBe(true)
    expect(urn('urn:ietf:std:50')).toBe(true)
    expect(urn('urn:liberty:schemas:authctx:2002:05')).toBe(true)
  })

  it('URN valid: valid ISBN (ISBN-10)', () => {
    expect(urn('urn:isbn:0451450523')).toBe(true)
    expect(urn('urn:isbn:0-395-36341-1')).toBe(true)
  })

  it('URN valid: uppercase', () => {
    // https://www.wikidata.org/wiki/Property:P3212
    expect(urn('URN:ISAN:1881-66C7-3420-6541-9-9F3A-0245-U')).toBe(true)
  })

  // example from https://www.iana.org/assignments/urn-formal/isbn
  it('URN valid: valid ISBN (ISBN-13)', () => {
    expect(urn('URN:ISBN:978-951-0-18435-6')).toBe(true)
  })

  it('URN valid: real ISBN', () => {
    expect(urn('URN:ISBN:978-952-10-3937-9')).toBe(true)
  })

  it('URN valid: real URN-NBN', () => {
    expect(urn('urn:nbn:de:kobv:11-100238157')).toBe(true)
  })

  it('URN valid: UUID URN Namespace', () => {
    expect(urn('urn:uuid:6d63842b-deb8-4093-9357-09deac3d0de6')).toBe(true)
  })

  it('urn:iso', () => {
    expect(urn('urn:iso:19115:2003')).toBe(true)
    expect(urn('urn:ISO:xsd:$pain.001.001.03')).toBe(true)
    expect(urn('urn:iso:std:iso:20022:tech:xsd:pain.008.001.02')).toBe(true)
  })

  //it('invalid urn:iso', () => {
  //  expect(urn('urn:iso:19115000000:2003')).toBe(false)
  //})

  it('others', () => {
    expect(urn('urn:sha1:SQ5HALIG6NCZTLXB7DNI56PXFFQDDVUZ')).toBe(true)
    expect(urn('urn:tree:tiger:276TET7NAXG7FVCDQWOENOX4VABJSZ4GBV7QATQ')).toBe(true)
    expect(urn('urn:bitprint:SQ5HALIG6NCZTLXB7DNI56PXFFQDDVUZ.276TET7NAXG7FVCDQWOENOX4VABJSZ4GBV7QATQ')).toBe(true)
  })

  //it('invalid urn: invalid ISAN', () => {
  //  expect(urn('URN:ISAN:1881-66C7-3420-6541-9-9F3A-0245-')).toBe(false)
  //})

  it('invalid urn: empty URN', () => {
    expect(urn('URN:')).toBe(false)
  })

  it('invalid urn: no param', () => {
    expect(urn()).toBe(false)
  })

  it('invalid urn: empty param', () => {
    expect(urn('')).toBe(false)
  })

  it('invalid urn: invalid string', () => {
    expect(urn('dd')).toBe(false)
  })
})
