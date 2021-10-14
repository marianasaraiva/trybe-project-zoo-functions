const data = require('../data/zoo_data');

const { species, employees } = data;

const arrayResultado = employees.map((objeto) => {
  const arr = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(parametro) {
  if (parametro === undefined) return arrayResultado;
  const validarEntrada = arrayResultado
    .find((element) => element.fullName.includes(Object.values(parametro))
      || element.id.includes(Object.values(parametro)));
  if (validarEntrada === undefined) {
    throw new Error('Informações inválidas');
  }
  return validarEntrada;
}

module.exports = getEmployeesCoverage;
