//!Maneira clássica de escrever objetos literias
var obj = {
  prop1: "Antônio Lima Gally Neto",
};
//* Com o Ecma6 é possível definir propriedades em variáveis
//* sem a necessidade de atribuir um valor à ela dentro do objeto
var prop2 = "Antônio Lima Gally Neto";
var obj2 = {
  prop2, //console.log(obj2) = obj2={prop2:"Antonio..."}
};
//* Isso também se aplica à métodos
function method1() {
  console.log("method called");
}
var obj3 = {
  method1, //console.log(obj3.method1) = "method called"
};

//! Atribuindo propriedade ao objeto por meio de variáveis
var propName = "test";
var obj4 = {};
obj4[propName + "_concat"] = "prop value";
//! Com ES6:
var obj5 = {
  [propName + "_concat"]: "prop value",
};
