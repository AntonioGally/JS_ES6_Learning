var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function insertFistPosition(arr, value) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
}

insertFistPosition(arr, 10);

/* 
    Quando eu passo arr[i] = arr[i-1] significa que eu estou criando uma nova posição no array,
    pq arr[i] não é a ultima posição (arr.length) e sim uma nova posição, por isso o 20 (ultima posição)
    se conserva no arr [i-1], abrindo espaço pra colocar algum valor na posição [0]
*/
