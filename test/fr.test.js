const { FPS } = require('./../src/FR/FR')

describe('#NIR', () => {
  const nirGenerator = require('nir-generator')
  const myNIR = nirGenerator.generateNir()

  it('auto-test nir-generator', () => {
    expect(Boolean(myNIR.match(nirGenerator.nirRegex))).toBe(true)
    expect(myNIR.match(nirGenerator.nirRegex).length).toBe(1)
  })
})

// format documentation: https://fps-stationnement.fr/questions/numero-avis-paiement.php
describe('FPS number validation (France only)', () => {
  // exemple from https://twitter.com/Ooalan/status/972167129586954241
  it('valid real FPS number (Bordeaux), Urbis Park', () => {
    expect(FPS('21330063500017181068066029', 'EB172HB', '09/03/2018')).toBe(true)
  })

  // exemple from https://twitter.com/KinstlerPatrick/status/1017444552033144832
  it('valid real FPS number (Paris 12e), Streeteo', () => {
    expect(FPS('21750001600019-181193050137', 'DP936HW', '12/07/2018')).toBe(true)
  })

  // example from https://twitter.com/maxence_wp/status/948468476485799936
  it('valid real FPS number (Paris 1e), from MOOVIA, 2018', () => {
    // key from https://fps-stationnement.fr/questions/numero-telepaiement-perdu.php
    expect(FPS('21750001600019183002025066', 'CE-501-VF', '02/01/2018', '72')).toBe(true)
  })

  // example from https://twitter.com/JM_1979/status/1086033313490444290
  // (Paris 19e)
  // 'FB-308-YK', from MOOVIA

  // example from https://twitter.com/tomjoubert/status/1100096171001950209
  // Paris (17e), from MOOVIA

  // example from https://twitter.com/LeTonyMartinez/status/1005073264023146496
  // Paris

  // example from https://twitter.com/lebretdesache/status/996085899086753792
  // Paris

  // example from https://twitter.com/MissGwiGwid971/status/1085647102871367681
  // 'EN542CG', Streeteo, 2019

  // example from https://twitter.com/romu92/status/1064817699396694016
  // Streeteo, 2018, erreurs de lettres dans ma plaque d'immat

  // example from https://twitter.com/COMECS2/status/1032589476466515968
  // Montrouge, Streeteo, 17/08/2018
  // 21920049000015-

  // example from https://twitter.com/stephanrobinson/status/954401387676397569
  //it('valid real FPS number (Nice), same car, same month, from MOOVIA, 2018', () => {
  //  expect(FPS('', 'DT-232-YV', '17/01/2018')).to.equal(true)
  //  expect(FPS('', 'DT-232-YV', '18/01/2018')).to.equal(true)
  //})

  // example from https://img.bfmtv.com/i/0/0/ec1/9e39968900670213bd9bf29f4771e.jpeg
  it('valid real FPS number (Paris), 2018', () => {
    expect(FPS('21750001600019-182008114031')).toBe(true)
  })

  it('valid plate number but empty FPS number', () => {
    expect(FPS('', 'CE-501-VF')).toBe(false)
    expect(FPS('', 'FB-308-YK')).toBe(false)
  })

  it('wrong FPS number: year before 2018', () => {
    expect(FPS('21750001600019-171193050137')).toBe(false)
  })

  it('wrong FPS number: year after 2018', () => {
    expect(FPS('21750001600019-991193050137')).toBe(false)
  })

  it('wrong FPS number: wrong date in FPS number', () => {
    expect(FPS('21750001600019-181999050137')).toBe(false)
  })

  it('wrong FPS number: wrong SIRET', () => {
    expect(FPS('00050001600019-181193050137')).toBe(false)
  })
})
