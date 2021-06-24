function parteFetch() {
  //! Executar num arquivo HTML
  fetch("https://api.github.com/users/AntonioGally") //Para configurações da requisição, add um objeto e coloca os parâmetros: {method:"post", headers:"..."}
    .then((responseStream) => {
      //fetch é uma API do navegador que trabalha com promises e retorna também uma promise
      if (responseStream.status === 200) {
        return responseStream.json();
      } else {
        throw new Error("Requeste error");
      }
      //Aqui eu transformo o responseStream em json
    })
    //e como ele é processado de uma maneira assíncrona, ele retorna uma promise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

function parteAsync() {
  //! Async/Await é uma forma de se criar promises de maneira mais simples
  const simpleFunc = async () => {
    return 12345;
  };
  //   simpleFunc()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //! Await espera que outras promises sejam resolvidas

  const asyncTimer = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(12345);
      }, 1000);
    });
  const simpleFunc2 = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch(
      "https://api.github.com/users/AntonioGally"
    ).then((resStream) => resStream.json());
    //usando o await é possível utilizar o fetch pra fazer requisições
    return dataJSON;
  };
  simpleFunc2().then((data) => {
    console.log(data);
  });
}
parteAsync();
