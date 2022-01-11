const user = {
  firstName: 'Antonio',
  lastName: 'Gally',
  rename_this: 'Key para renomear no destructuring',
  age: 19,
  instagram: '@tony.lgn',
  skills: ['Front-end', 'Mobile']
}

//Destructuring
const { firstName, age, skills, rename_this: renameThis } = user
const [primary, secondary, tertiary, quaternary] = skills;

console.log(firstName, age, skills);