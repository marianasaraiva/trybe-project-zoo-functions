const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species
    .find((spec) => spec.name === animal)
    .residents.every((anim) => anim.age >= age);
}

module.exports = getAnimalsOlderThan;
