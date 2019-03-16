const { isSIRET, isSIREN } = require('siret')

// https://fr.wikipedia.org/wiki/Forfait_de_post-stationnement
// data download from https://www.banatic.interieur.gouv.fr/V5/fichiers-en-telechargement/fichiers-telech.php

// TODO: prefer options
const FPS = function (FPSnumber='', platenumber='', date='', key='') {
  const moment = require('moment')

  // TODO: clé (2 chiffres) ?
  if (! /^[1-9]\d{13}-?\d{12}$/.test(FPSnumber)) {
    return false
  }

  // check SIRET
  // https://www.wikidata.org/wiki/Property:P3215
  const siret = FPSnumber.substr(0, 14)
  //const siren = // https://www.wikidata.org/wiki/Property:P1616

  //TODO: add a testcase for a wrong SIREN checksum - https://www.insee.fr/fr/metadonnees/definition/c1841
  //TODO: add a testcase for a wrong SIRET checksum - https://www.insee.fr/fr/metadonnees/definition/c1841
  // -> need more librairy - https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements

  //TODO: add code for check NIC (Numéro Interne de Classement) - digits ?? https://www.lesclesdelabanque.com/web/Cdb/Entrepreneurs/Content.nsf/DocumentsByIDWeb/7KDKUB?OpenDocument

  if (! isSIRET(siret)) {
    return false
  }

  const year = Number(FPSnumber.match(/\d{14}-?(\d+)/i)[1].substr(0, 2))
  if (year < 18) {
    return false
  }
  if ((2000 + year) > new Date().getFullYear()) {
    return false
  }
  const dayFromFirstJanv = Number(FPSnumber.match(/\d{14}-?\d{3}(\d+)/i)[1].substr(0, 3)) // ok
  if (dayFromFirstJanv > 366) {
    return false
  }

  if (date !== '') {
    var now = moment(date, "DD-MM-YYYY")
    var first = moment("01/01/20"+year, "DD-MM-YYYY")
    var countDay = now.diff(first, 'days') + 1
    if (dayFromFirstJanv !== countDay) {
      //TODO: add a test case
      return false
    }
  }

  //if (siret === '21850294600013') {
    // webpage https://la-tranche-sur-mer.prestopark.com/fines/pay#/fine/new
  //}

  // check key (la clé est le reste de la division du numéro par 97)
  // https://www.auto-evasion.com/forum-auto/droit-penal-routier-code-de-la-route/cle-de-paiement-de-contravention-en-ligne-perdue/222079.html

  // check country of SIRET, to exclude Monaco

  // check car plate (world)
  //(sans tiret)

  return true
}

module.exports = {
  SIRET: isSIRET,
  SIREN: isSIREN,
  FPS
};
