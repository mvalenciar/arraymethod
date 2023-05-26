const numbers = [1, 30, 49, 29, 10, 13];

let rta;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

  if (element === 30) {
    rta = element;
  }
}

console.log('for', rta);

const rta1 = numbers.find((element) => element === 30);

console.log('find', rta1);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot Dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot Cakes',
    price: 355,
    id: '🥞',
  },
];

const rta2 = products.find((product) => product.id === '🌭');
console.log(rta2);

const rta3 = products.findIndex((product) => product.id === '🥞');
console.log(rta3);
