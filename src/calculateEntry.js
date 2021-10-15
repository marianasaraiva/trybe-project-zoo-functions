// Requisito discutido em grupo para entendimento da solicitação.
const data = require('../data/zoo_data');

// Função para verificar a quantidade de pessoas por idade.
function countEntrants(entrants) {
  // usei a HOF filter para filtrar o array fornecido como parametro, realizei a regra de negócio das condicionais e busquei o tamanho do array com o length para retornar o número de itens que corresponde ao numero de visitante por idade.
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  // Utilizo as shortshands para o retorno do objeto
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // Condição para verificar se nenhum argumento passado sinaliza false -> !entrants, portanto retorna 0 como setado no return deste if; objeto vazio -> Object.values(entrants).length, também retornando 0.;
  if (!entrants || Object.values(entrants).length === 0) return 0;
  // const numeroVisitantes armazena o retorno da funçao em uma variavel para usar o nome da constante e acessar o objeto e consequentemente os values para efetuar a multiplicação com os values do objeto Prices.
  const numeroVisitante = countEntrants(entrants);
  const numeroChild = numeroVisitante.child * data.prices.child;
  const numeroAdult = numeroVisitante.adult * data.prices.adult;
  const numeroSenior = numeroVisitante.senior * data.prices.senior;
  return numeroChild + numeroAdult + numeroSenior;
}

module.exports = { calculateEntry, countEntrants };
