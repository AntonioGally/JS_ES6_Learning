class CustomError extends Error {
  //* Customizando o erro
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}
try {
  //!Gera um erro
  const myError = new CustomError({
    message: "Custom message",
    data: {
      type: "Server error",
    },
  });
  throw myError;
} catch (err) {
  //! Tratando o erro
  console.log(err);
  if (err.data.type === "Server error") {
    console.log("Erro do servidor ");
  } else {
    console.log("Erro em outro lugar");
  }
} finally {
  //*Executando o código seguinte independetemente do erro acima
  console.log("Keep going");
}

//! Criando erros customizados é possível obter mais informações sobre o erro, deixando mais
//! Fácil de tratá-lo
