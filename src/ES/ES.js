// require("dni-js-validator").dni ??

module.exports = {
  CIF: require('validate-cif').isValid, // Q836070
  carPlate: require('spanish-car-plate').isValid,
  // Número de expediente: maxlength="12" https://sedeapl.dgt.gob.es:7443/WEB_Sanciones/jsp/sincertificado/identificacionPagador.jsf
};
