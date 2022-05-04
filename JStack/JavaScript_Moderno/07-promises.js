const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucess');
  }, 2000)
})

 
async function run() {
  const resposta = await apiCall;
  //Linhas travadas até o await ser resolvido
  console.log("Oi")
  console.log(resposta);
}
run();
