const pets = ['cat', 'dog', 'bat'];

let includeArray = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];

  if (element === 'dog') {
    includeArray = true;
    break;
  }
}

const rta = pets.includes('dog');

console.log('for', includeArray);
console.log('includes', rta);
