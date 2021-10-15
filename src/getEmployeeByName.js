const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // condição de verificação para quando não houver parametros ao chamar a função retorne um objeto vazio.
  if (employeeName === undefined) return {};
  // usei a HOF find para encontrar o elemento de acordo com firstName e lastName do colaborador, e o retorno será o objeto completo que atenda aos parametros informados na chamada da função.
  return employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
