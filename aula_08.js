function parte1() {
  //!Exemplificando callback numa maneira antiga

  //Antigamente era comum utilizar funções de callback nativa do js para
  //executar algo após uma determinada tarefa assíncrona ter sido executada.

  function doSomething(callback) {
    setTimeout(function () {
      //did something
      callback("First data");
    }, 1000);
  }
  function doOtherThing(callback) {
    setTimeout(function () {
      //did other thing
      callback("Second data");
    }, 1000);
  }

  function doAll() {
    doSomething(function (data) {
      var processedData = data.split("");

      doOtherThing(function (data2) {
        var processedData2 = data2.split("");

        setTimeout(function () {
          console.log(processedData, processedData2);
        }, 1000);
      });
    });
  }
  doAll();
}
function parte2() {
  //!Implementando tratamento de dados em cada etapa
  function doSomething(callback) {
    setTimeout(function () {
      //did something
      callback("First data");
    }, 1000);
  }
  function doOtherThing(callback) {
    setTimeout(function () {
      //did other thing
      callback("Second data");
    }, 1000);
  }

  function doAll() {
    //*Callback hell
    try {
      doSomething(function (data) {
        var processedData = data.split("");
        try {
          doOtherThing(function (data2) {
            var processedData2 = data2.split("");
            try {
              setTimeout(function () {
                console.log(processedData, processedData2);
              }, 1000);
            } catch (err) {
              //handle error
            }
          });
        } catch (err) {
          //handle error
        }
      });
    } catch (err) {
      //handle error
    }
  }
  doAll();
}
function parte3() {
  //!Utilizando promises para tratar os dados
  //?Escrevendo uma promise:
  const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      //did something
      resolve("First data");
      reject("Something went wrong"); // utilizando reject ao envés de catch
    }, 1000);
    //Se ele tiver algum tipo de problema, ele vai retornar automaticamente no reject
  });
  const doOtherThingPromise = new Promise((resolve, reject) => {
    throw new Error("Something went wrong"); //Fazendo um erro propositalmente para tratá-lo

    setTimeout(function () {
      //did other thing
      resolve("Second data");
    }, 1000);
  });
  //!Uma promise possui três estados:
  //* Pending
  //* Fulfilled
  //* Rejected
  //Para chamá-las sequencialmente não é preciso invocá-las
  console.log(doSomethingPromise);
  //Nesse caso ela passa a ser uma promise pendente pq ela só vai acontecer 1s dpois desse console.log
  //?Pra executar o console.log da maneira correta precisa utilizar o "then"
  doSomethingPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error)); //tratando os erros
  //Colocando um then, caso a promise esteja completa com sucesso, os dados irão cair na func criada dentro do then

  //!É possível também invocar uma promise dentro da outra
  doSomethingPromise
    .then((data) => {
      console.log(data);
      return doOtherThingPromise;
    })
    .then((data2) => console.log(data2))
    .catch((err) => console.log(err));
}
function parte4() {
  //!Reescrevendo todos os callbacks utilizando promises
  const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("First Data");
      }, 1000);
    });

  const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Second data");
      }, 1000);
    });

  doSomethingPromise()
    .then((data) => {
      console.log(data.split(""));
      return doOtherThingPromise();
    })
    .then((data2) => console.log(data2.split("")))
    .catch((err) =>
      console.log(err + " Tratando todos os erros das duas promises")
    );
}
function parte5() {
  //!Executando promises em paralelo
  const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("First Data");
      }, 3000);
    });

  const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Second data");
      }, 1000);
    });

  Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
  }); //!Resolvendo promises em paralelo, uma vai esperar a outra  e as duas serão exibidas juntas
  Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
  }); //!Apenas a promise q resolver primeiro será exibida
}
