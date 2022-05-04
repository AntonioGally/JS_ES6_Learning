const products = [
  { id: 0, name: 'MacBook Air', price: 7500 },
  { id: 1, name: 'MacBook Pro', price: 10000 },
  { id: 2, name: 'MacBook Mini', price: 6000 },
];

// .find
const find = products.find((el) => el.price > 7000);
// Aqui ele só vai trazer o primeiro elemento encontrado na lista e retornar o 
// seu respectivo objeto.

// .findIndex
const findIndex = products.findIndex((el) => el.price > 7000);
// Aqui ele vai retornar o index do primeiro elemento encontrado na lista.

// .some (se ALGUM elemento bater com a condição...)
// Ele sempre vai retornar um boolean
const some = products.some((product) => product.price > 6000); //true

// .every (se TODOS os elementos baterem com uma condição...)
const every = products.every((product) => product.price > 1000); //True, todos os elementos são mais caros q 1k

// .map -> Serve para pegar um array de um jeito e criar um novo array com alguma propriedade modificada
const map = products.map((product) => ({ ...product, subTotal: 0 }));
// Vai retornar um novo array com um novo key-value chamado subtotal

// .filter -> Tira alguns elementos de dentro do array
const filter = products.filter((el) => (el.price > 6000));

// .reduce -> Pegar um array e transformar em outro tipo de dados (reduzir)
const reduce = products.reduce((accumulator, current) => {
  return accumulator + (current.price); // Isso vai retornar o valor total somando todos os prices do array
}, 0);
// O segundo argumento do reduce é o valor inicial que vai começar no accumulator