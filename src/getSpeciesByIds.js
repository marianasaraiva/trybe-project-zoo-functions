// realizo destructuting em species para utilizar os dados.
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // ao usar o rest, o paramentro da função passa a ser um array de objetos, por este motivo, posso utilizar a HOF some para encontrar o animal/animais informados com o id no parametro.
  // console.log(ids);
  // utilizo a HOF filter para filtrar em species o ii do animal passado por parametro e retornar o array do objeto filtrado.
  return species.filter((animal) => ids.some((id) => animal.id === id));
}

module.exports = getSpeciesByIds;
