const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const teste = data.employees.find((func) => func.id === id).responsibleFor[0];
  const animalObj = data.species.find((specie) => specie.id === teste).residents;
  return Object.values(animalObj.sort((a, b) => a.age - b.age)[animalObj.length - 1]);
}

// console.log(getOldestFromFirstSpecies(burlId));

module.exports = getOldestFromFirstSpecies;
