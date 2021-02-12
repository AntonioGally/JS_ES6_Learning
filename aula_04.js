//!Parte 01 - RestOperator
function parte1() {
  function sum(a, b) {
    //?Modo antigo para deixar a quantidade de argumentos independente
    var value = 0;
    for (var i = 0; i < arguments.length; i++) {
      value += arguments[i];
    }
    return value;
  }
  console.log(sum(5, 5, 5, 5, 5)); //?Quero passar vários valores pra uma função independente da quantidade de argumentos q a mesma tem

  function newSum(...args) {
    //*Rest Operator "..."
    //?Novo modo de deixar a quantidade de argumentos independente
    return args.reduce((acc, value) => acc + value, 0); //?o arguments é um array, ent eu escrevo uma func para fazer a soma dos itens internos
  }
}
//!Parte 01_1 - Spread Operator
function parte1_1() {
  //?Função para multiplicar utilizando rest
  const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
  //?Essa função pega todos os numeros e multiplica com outra função
  //*O problema é que o código fica verboso e n fica mt descritivo quando vc usa o método apply
  //*e tenta fazer operações lógicas usando duas listas
  const sum = (...rest) => {
    return multiply.apply(undefined, rest);
  };

  //! O rest operator pega todos os parâmetros de uma função e transforma num array
  //! O spread operator pega todos os itens de um array e transformar em parâmetros de uma func
  //?utilizando rest para transformar em array
  const newSum = (...args) => {
    return multiply(...args); //?utilizando spread para quebrar em parâmetros
  };
  //* O spread operator pode ser usado em Strings, Arrays, objetos e objetos iteraveis
  //? Exemplo em Strings:
  const str = "Antônio Lima Gally Neto";
  //!rest
  function logArgs(...args) {
    console.log(args);
  }
  console.log(logArgs(...str)); //!spread
  //? Quebrando array e passando para uma func em itens:
  const arr = [1, 2, 3, 4];
  function newLogArgs(a, b, c) {
    console.log(a, b, c);
  }
  newLogArgs(...arr); //!spread
  //? Concatenando arrays usando spread
  const arr2 = [...arr, 6, 7, 8, 9];
  const arr3 = [...arr, ...arr2, 0, 0, 0];
  console.log(arr3);

  //?Utilizando spread que só serve se for em objetos literais que tem a função de construir novos objetos
  const obj = {
    test: 123,
  };
  const obj2 = {
    ...obj, //! spread
    test2: "iae mané",
  };
}
