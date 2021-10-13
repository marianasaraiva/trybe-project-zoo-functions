const data = require('../data/zoo_data');

const { species, hours } = data;

const diaDaSemana = Object.keys(hours);
// Auxilio Tales Coelho monitoria para confecçao do objeto
const geralZoo = () => {
  const objeto = diaDaSemana.reduce((acc, elem) => {
    acc[elem] = {
      officeHour: `Open from ${hours[elem].open}am until ${hours[elem].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(elem)).map((a) => a.name),
    };
    return acc;
  }, {});
  objeto.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objeto;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return geralZoo();
  }
  const validaDadosInseridos = species
    .some((cond) => scheduleTarget === cond.name);
  if (!validaDadosInseridos && !diaDaSemana.includes(scheduleTarget)) {
    return geralZoo();
  }
  if (diaDaSemana.includes(scheduleTarget)) {
    return { [scheduleTarget]: geralZoo()[scheduleTarget] };
  }
  return species.find((teste) => teste.name === scheduleTarget).availability;
}

module.exports = getSchedule;
