/**
 ** Funções comuns
 *? Forma de declarar funções usando a sintaxe do js clássico
 */
function log(value) {
  console.log(value);
}
/**
 ** Funções anônimas
 *? Servem para omitir o nome da função, porém, precisam estar atribuídas à uma variável
 *? com o intuito principal de passar essas funções como parâmetros para outras funções
 */
var log_02 = function (value) {
  console.log(value);
};
/**
 ** Arrow Functions
 *? O nome Arrow Function vem da combinação desses dois caractéres: =>
 *? Essas funções são anônimas, ou seja, você pode atribui-lá à uma variável
 *? ou passando-a em um parâmetro para uma nova função.
 *? Tudo o que não for uma expressão, precisa ser envolvido em chaves.
 *! Onde a Arrow Function se sobresai?
 *? os contextos do javascript funcionavam de forma confusa, inclusive
 *? quando se tratavam de contextos dentro de funções, que por sua vez,
 *? ficavam dentro de uma outra função ou um objeto. O método "this"
 *? precisava ser usado constantemente em conjunto com o bind, com o
 *? intuito de trazer um contexto de uma função "pai" para a função
 *? filha.
 *? Com as Arrows Functions, você pode escrever blocos de códigos
 *? e ainda sim, possuir o contexto "original". As Arrows Functions
 *? têm a propriedade de possuir o contexto do código que está envolvendo-as,
 *!Contexto Lexico 
 *?
 */
//versão pré ES6
var obj = {
  showContext: function showContext() {
    this.log("teste"); //Conceito de hoasting
    var _that = this; //era comum armazenar o contexto em variáveis
    setTimeout(
      function () {
        this.log("after 1000ms "); //aqui ele iria pegar o contexto window, pq o setTimeout é uma func do navegador
      }.bind(this),
      1000
    ); //ja aqui, ele pega o contexto de fora da função setTimeout
  },
  log: function log(value) {
    console.log(value);
  },
};
var obj_es6 = {
  showContext: function showContext() {
    //this
    setTimeout(() => {
      this.log("after 1000ms");
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  },
};
var sum = (a, b) => a + b;
/**
 *! Conceito de Hoisting
 *? É o fato de você poder invocar/utilizar uma variável ou função que
 *? independente da ordem em que ela se situa no código. Essa função do
 *? JS não se aplica quanto às Arrow Functions.
 */

/**
 ** Criando objetos literais com arrow function
 */
var createObj = () => ({ test: 123 });
