//Importing custom module
const { printName, lastName } = require('./printName.js');
printName(`Antônio ${lastName}`);

//Importing native module
const os = require('os');
console.log(os.type());