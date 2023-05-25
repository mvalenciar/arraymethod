const letters = ['a', 'b', 'c'];

const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + '++');
}

console.log('original', letters);
console.log('new', newArray);

const newArray2 = letters.map((item) => item + '++');

console.log('map', newArray2);
