function minhaFunction() {
  // Com esse this, a função passa a ter um construtor e seu próprio contexto
  // É possivel acessar esse nome -> new minhaFunction().name por exemplo
  this.name = 'Antonio'
}
console.log(new minhaFunction());

const minhaArrowFunction = () => {
  // Esse this é do contexto de fora da função, nesse caso é o global, ou seja,
  // o node.
  this.age = "19";
}