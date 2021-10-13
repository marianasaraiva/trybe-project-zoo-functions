const data = require('../data/zoo_data');

const { species } = data;

const teste = () => {
  const objeto = species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
  return objeto;
};

const teste2 = (animal) => species.reduce((sum, spec) => ((spec.name === animal.specie)
  ? (spec.residents) : (sum)), 0).length;

const teste3 = (animal) => {
  const ani = species.find((specie) => specie.name === animal.specie).residents;
  const animals = ani.reduce((acc, sexo) => ((sexo.sex === animal.sex)
    ? (acc + 1) : (acc)), 0);
  return animals;
};

function countAnimals(animal) {
  if (animal === undefined) { // Utilizando a HOF reduce para reduzir o array para objeto no formato desejado.
    return teste();
  }
  if (Object.values(animal).length === 1) { // Usei a HOF reduce para informar o numero de animais por nome e o length para dizer o tamanho do array.
    return teste2(animal);
  }
  return teste3(animal);
}

console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' })); // 0
// console.log(countAnimals({ specie: 'elephants', sex: 'male' })); // 2

module.exports = countAnimals;
