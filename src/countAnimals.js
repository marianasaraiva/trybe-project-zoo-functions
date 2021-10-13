const data = require('../data/zoo_data');

const { species } = data;

const objetoQtdAnimais = () => {
  const objeto = species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
  return objeto;
};

const qtdAnimaisResidentes = (animal) => species
  .reduce((sum, spec) => ((spec.name === animal.specie)
    ? (spec.residents) : (sum)), 0).length;

const qtdAnimaisSexo = (animal) => {
  const ani = species.find((specie) => specie.name === animal.specie).residents;
  const animals = ani.reduce((acc, sexo) => ((sexo.sex === animal.sex)
    ? (acc + 1) : (acc)), 0);
  return animals;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return objetoQtdAnimais();
  }
  if (Object.values(animal).length === 1) {
    return qtdAnimaisResidentes(animal);
  }
  return qtdAnimaisSexo(animal);
}

module.exports = countAnimals;
