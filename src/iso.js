const mathInterval = (value) => {
  const intervalParse = require('math-interval-parser').default
  return intervalParse(value) !== null
}
/*
const urn = (value) => {
  const { extract } = require('identifiers-urn')
  const result = extract(value)[0] || ''
  return result === value && value !== ''
}
*/

const isUUID = function (uuid = '') {
  const { validate } = require('@fczbkk/uuid4')
  return validate(uuid)
}

//TODO: move into a new file, with: https://fr.wikipedia.org/wiki/Sch%C3%A9ma_d%27URI
const urn = (value = '') => {
  const { RFC2141 } = require('urn-lib')

  const parsed = RFC2141.parse(value) || {protocol: 'urn', nid: '', nss: ''}
  const validationErrors = RFC2141.validate(parsed) || []
  if (validationErrors.length) {
    return false
  }
  if (parsed.nid === 'uuid' && !isUUID(parsed.nss)) {
    return false
  }

  //TODO: Creating custom rules with https://www.npmjs.com/package/urn-lib#creating-custom-rules

  // urn:oid:2.16.840 -> https://www.wikidata.org/wiki/Property:P3743

  return true
}

const URNtoURL = (value = '') => {
  const { RFC2141 } = require('urn-lib')
  const parsed = RFC2141.parse(value)
  //TODO: use array or https://github.com/fczbkk/UrlMatch (installed)
  //TODO: namespaces https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml
  //TODO: namespaces urn:nbn:(de) https://nbn-resolving.org/namespaces

  if (parsed.nid === 'lsid') { //urn:lsid
    //if (parsed.nss === 'faunaeur.org') {
    //  return 'http://www.eu-nomen.eu/portal/taxon.php?GUID=urn:lsid:faunaeur.org:taxname:$1'
    //}
    return 'http://zoobank.org/urn:lsid' + parsed.nss // old ?
  }
  if (parsed.nid === 'nbn') {
    return 'https://nbn-resolving.org/' + parsed.nss
  }
  // max: 2,083 chars

  // from https://www.iana.org/assignments/urn-formal/isbn
  // http://urn.fi/URN:ISBN:978-952-10-3937-9
}

module.exports = {
  mathInterval,
  urn,
  uuid4: isUUID,
  URNtoURL
};
// alias
//module.exports['ISO 31-11:1992'] = module.exports['iso31-11']
