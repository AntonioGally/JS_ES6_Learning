function parte1() {
  //!Destructing with Arrays
  //!Quebrando array em variáveis sem ES6
  var arr = ["Apple", "Banana", "Orange", ["tomato"]];
  var apple = arr[0];
  var banana = arr[1];
  var orange = arr[2];
  var tomato = arr[3][0];
  //!Destructuring Assignment
  var [apple2, banana2, orange2, [tomato2]] = [
    "Apple",
    "Banana",
    "Orange",
    ["tomato"],
  ];
  //? É importante sempre verificar se todos os índices são compatíveis com as variáveis do destruct
}
function parte2() {
  //!Destructing with Objects
  var obj = {
    name: "Antonio",
    props: {
      age: 26,
      colors: ["black", "blue"],
    },
  };
  var name1 = obj.name; //Método antigo
  var idade1 = obj.props.age;

  var { name } = { obj }; //using destruct
  var {
    props: {
      age,
      colors: [color1, color2], //destructing no array n precisa se preocupar com o nome pq ele vai pelo indice
    },
  } = obj;

  var arr = [{ name: "Apple", type: "fruit" }];
  var fruit1 = arr[0].name; //Método antigo
  var [{ name }] = arr; //usando destructing num array de objetos
  //* É importante ressaltar que no destructing de objetos, o nome da variável temq ser igual ao
  //* nome da chave que ta no obj. Você pode atribuir um novo nome depois:
  //? var [{ name : novo_nome }] = arr;
}

function parte3() {
  //! Destructing em uma lista de argumentos de uma função
  var arr = [1, 2, 3, 4, 5, 6];
  function sum(arr) {
    return arr[0] + arr[1]; //Método antigo
  }
  function newSum([a, b] = [0, 0]) {
    //Usando destructing junto com default values
    return a + b;
  }
  // console.log(newSum([5, 5]));
  function newSum2({ a = 0, b = 0 }) {
    //Usando destructing em objetos dentro dos argumentos de uma func
    return a + b;
  }
  console.log(newSum2({ a: 5 }));
}
