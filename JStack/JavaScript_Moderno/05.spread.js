const user = {
  firstName: 'Antonio',
  lastName: 'Gally',
  rename_this: 'Key para renomear no destructuring',
  age: 19,
  instagram: '@tony.lgn',
  skills: ['Front-end', 'Mobile'],
  active: false
}

// Spread (espalhar) operator
const updatedUser = {
  ...user,
  active: true,
}

console.log();