const user = {
  firstName: 'Antonio',
  lastName: 'Gally',
  rename_this: 'Key para renomear no destructuring',
  age: 19,
  instagram: '@tony.lgn',
  skills: ['Front-end', 'Mobile']
}

// O rest operator tem que ser sempre o último da desestruturação
const { firstName, skills, ...restoUser } = user
const [primary, ...restoSkills] = skills;

console.log();