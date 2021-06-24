function parte1() {
  //!Symbols
  //? Symbols é uma maneira de de gerar um identificador único
  const uniqueID = Symbol(); //Ele não tem valores específicos, é apenas único
  const uniqueID2 = Symbol("Hello World"); // Esse valor serve apenas para debugar, pra vc saber oq q significa o symbol
  const obj = {
    [uniqueID]: "Hello",
  };
  //* Esse obj não será privado, utilizar Symbols numa propriedade é uma forma de dizer
  //* aos desenvolvedores que aquela propriedade não deverá ser mexida.

  //? Outra utilidade do symbols é a Weel Known Symbols
  //* Symbol.iterator
  //* Symbol.split
  //* Symbol.toStringTag

  //! O iterador é uma interface pra vc consumir uma lista ou uma estrutura de dados:
  const arr = [1, 2, 3, 4];
  const it = arr[Symbol.iterator]();
  while (true) {
    let { value, done } = it.next();
    if (done) {
      break;
    }
    console.log(value);
    //* As estruturas de while fazem exatamente isso, percorrem uma lista utilizando a
    //* interface iterator
  }
  //!Com o ES6 não precisa gerar o iterador, voce pode usar o for of ou o spread operator
  str = "Antônio Lima Gally Neto";
  const arr2 = [...str, ...arr];
  for (let value of str) {
    console.log(value);
  }
  for (let value of arr) {
    console.log(value);
  }
}
function parte2() {
  //!Utilizando Symbols para tornar um objeto iterador
  const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
      //? Pra cada uma das iterações da lista, eu quero retorna um valor e se acabou ou não a lista
      let i = 0; // criando um indice
      return {
        next: () => {
          //obj next q vai retornar o valor no indice q foi criado e retorna tbm a info de ter acabado ou n a lista
          i++;
          return { value: this.values[i - 1], done: i > this.values.length };
        },
      };
    },
  };
  //* Nesse momento, é possível usar o for of nesse objeto, também utilizar o spread operator:
  const newArr = [...obj];
  console.log(newArr);
  //const it = obj[Symbol.iterator]();
  // console.log(it.next());
}
parte2();
