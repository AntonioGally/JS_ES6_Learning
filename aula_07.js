//! Generators são funções com pausa
function parte1() {
  function* hello() {
    //uma função generator possui um "*" logo após a declaração da func
    console.log("Hello");
    yield; //Aqui são as pausas q a função vai fazer antes de prosseguir

    console.log("from");
    const value = yield "segunda pausa"; //*Se eu quiser retornar um valor a cada iteração, basta colocar um argumento no yield

    console.log(value);
  }
  //? Generator são parecidos com interators, eles se comunicam através de uma interface,
  //? para vc usá-lo, temq invocar alguma função, por exemplo o next()
  const it = hello();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next("Outside!")); //?Adicionando um value na função next
}

function parte2() {
  //!Utilizando generator
  function* naturalNumbers() {
    let number = 0;
    while (true) {
      //* Apesar de ser um looping infinito, é possível controlar com o generator o quanto
      //* o loop será percorrido a medida do necessário.
      yield number;
      number++;
    }
  }
  const it = naturalNumbers();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
}
function parte3() {
  //!É possível utilizar os generators para gerar os objetos iteráveis também
  const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
      for (var i = 0; i < this.values.length; i++) {
        yield this.values[i];
      }
    },
  };
  for (let value of obj) {
    console.log(value);
  }
}

parte3();
