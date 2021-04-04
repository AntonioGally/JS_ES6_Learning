const assert = require("assert");
const Math = require("../Math.js");
let value = 0;
describe("Math class", function () {
  //? Hooks

  // * After
  // * AfterEach
  // * Before
  // * BeforeEach

  beforeEach(function () {
    value = 0;
    // Aqui da pra resetar um valor de auxílio a cada teste,
    // então todos os testes terão value como 0, a menos que o value seja alterado dentro do teste
  });
  //! Validação comum
  //   it("Sum two numbers", function () {
  //     const math = new Math();
  //     math.sum(5, 5, (value) => {
  //       assert.equal(value, 10);
  //     });
  //   });
  //! Validação assíncrona
  it.skip("Sum two numbers", function (done) {
    const math = new Math();
    value = 5; //Edição de um valor apenas para esse teste
    //Alteração do timeout
    this.timeout(3000);
    math.sum(5, 5, (value) => {
      assert.equal(value, 10);
      done();
      //! O tempo de espera máximo é de 2s
    });
  });
  //* Método do Mocha para executar apenas um teste (it.only())
  it.skip("Multiply two Numbers", function () {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
  });
  //* Criando um teste antes mesmo de ter um código
  it.skip("Multiply tre numbers");
  //* it.skip() ignora o teste
});
