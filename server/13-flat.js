const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2]],
  [[10, 11, 12], 7, 8, 9],
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];

    if (typeof element === 'object') {
      for (let k = 0; k < element.length; k++) {
        const subElement = matriz[i][j][k];
        newArray.push(subElement);
      }
    } else {
      newArray.push(element);
    }
  }
}

const rta = matriz.flat(3);

console.log('for', newArray);
console.log('flat', rta);
