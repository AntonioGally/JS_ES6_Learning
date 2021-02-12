/**
 ** Parâmetro indefinido
 *? Quando uma função recebe menos parâmetro do que o esperado, ela
 *? retorna um erro, e antigamente, isso era contornado utilizando
 *? o operador lógico "OR", realizando um definição do parâmetro, caso
 *? ela fosse inexistente.
 */
function multiply(a, b) {
  b = b || 1; // tipo de prevenção ao undefined
  b = typeof b === "undefined" ? 1 : b; // prevenção mais elaborada
  return a * b;
}
function newMultiply(a, b = 1) {
  //Agora é possível atribuir valores padrão pelo próprio parâmetro
  return a * b;
}
/**
 *! Lazy evaluation
 *? É possível atribuir uma função para os valores padrões dos parâmetros
 */
function randomNumber() {
  return Math.random() * 10;
}
function lazyMultiply(a, b = randomNumber) {
  return a * b;
}
