const wordHoleMap = {
  A: 1,
  B: 2,
  C: 0,
  D: 1,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 1,
  P: 1,
  R: 1,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  X: 0,
  W: 0,
  Y: 0,
  Z: 0,
};

const text = `Este problema foi utilizado em 163 Dojo(s).
Se você pensar em um papel como um plano e uma letra como uma marcação neste plano, então estas letras dividem o plano em regiões. Por exemplo, as letras A, D e O dividem o plano em 2 pois possuem um espaço confinado em seu desenho, ou um “buraco”. Outras letras como B possuem 2 buracos e letras como C e E não possuem buracos.
Deste modo podemos considerar que o número de buracos em um texto é igual a soma dos buracos nas palavras dele.
A sua tarefa é, dado um texto qualquer, encontre a quantidade de buracos nele.`;

let count = 0;
[...text.trim()].forEach((value) => {
  if (wordHoleMap[value.toUpperCase()]) {
    count += wordHoleMap[value.toUpperCase()];
  }
});

console.log(`esse texto tem ${count} buracos`);
