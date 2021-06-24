//! A palavra "debuger" pode ser inserida em um local em que você queira que o chrome
//! congele o site para debbugar, como se fosse um brake point

//!Console:
console.log("oi, eu retorno um texto preto");
console.warn("Eu reotorno um warn");
console.error("Eu retorno um erro");
//* Tras informações de onde o código foi executado
console.trace();

//* Agrupando mensagens console
console.group("My Group");
console.log("Info inside group");
console.log("Info inside group");
console.log("Info inside group");
console.groupEnd("My Group");

//* Console table retorna uma tabela de valores para melhor visualização
console.table(["Antônio", "Lima", "Gally", "Neto"]);

//* console assert só vai printar quando a condição dentro dele for falsa
console.assert(1 === 0, "Condição falsa");

//* Estilizando console
console.log("c% styled log", "color: blue; font-size: 40px");
