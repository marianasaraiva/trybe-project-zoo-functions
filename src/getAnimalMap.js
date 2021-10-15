const { species } = require('../data/zoo_data');

const arrayLocal = ['NE', 'NW', 'SE', 'SW'];

const objetoGeral = () => arrayLocal.reduce((acc, element) => {
  acc[element] = species.filter((animal) => animal.location === element).map((elem) => elem.name);
  return acc;
}, {});

// console.log(objetoGeral());

function getAnimalMap(options) {
  return objetoGeral();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
