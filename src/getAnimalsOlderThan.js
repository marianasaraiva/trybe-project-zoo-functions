const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // utilizo a HOFs find para encontrar o animal que corresponde ao parametro informado e posteriormente, utilizo a HOF every para veirificar se todos os elementos do array residentes correspondem a condiçao de idade maior que o parametro informado e assim retornar um boolenao, true ou false.
  return species
    .find((spec) => spec.name === animal)
    .residents.every((anim) => anim.age >= age);
}

module.exports = getAnimalsOlderThan;
