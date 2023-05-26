const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

const newArray = [...elements];

for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}

const concatArray = elements.concat(otherElements);

console.log(elements);

console.log('for', newArray);
console.log('concat', concatArray);
