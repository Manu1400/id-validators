const { countries } = require('./../src')

//console.log(countries.AR.cuit("ddd"))

// https://github.com/jest-community/jest-extended#tosatisfyallpredicate
// https://github.com/jest-community/jest-extended#tobeboolean

const tab = Object.keys(countries).map(key => {
  const country = countries[key]
  Object.keys(country).map(keya => {
    //console.log(country)
    try {
      country[keya]('lsls')
    } catch(error) {
      console.error({country, key, keya, error})
    }
    //console.log(country[key])
    //var fn = country[key] || function() {}
    //fn('')
    //country[key]('1')
    return true
  })
  return true
})
