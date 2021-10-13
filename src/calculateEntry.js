const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const numeroVisitante = countEntrants(entrants);
  const numeroChild = numeroVisitante.child * data.prices.child;
  const numeroAdult = numeroVisitante.adult * data.prices.adult;
  const numeroSenior = numeroVisitante.senior * data.prices.senior;
  return numeroChild + numeroAdult + numeroSenior;
}

module.exports = { calculateEntry, countEntrants };
