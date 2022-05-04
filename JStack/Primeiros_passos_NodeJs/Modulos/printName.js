function printName(name) {
  console.log(name);
}

const lastName = 'Gally';

module.exports = { printName, lastName }


exports.printOtherName = (name) => {
  console.log("Print another name here", name);
}

exports.anotherLastName = 'Gally';
// O módulo pode ser exportado com module.exports no final do código ou pode ser
// exportado também direto na criação da variável/função.