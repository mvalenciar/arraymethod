const words = ['spray', 'limit', 'elite', 'exuberant'];

const orders = [
  {
    costumerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    costumerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    costumerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    costumerName: 'Valentina',
    total: 240,
    delivered: true,
  },
  {
    costumerName: 'Nicolas',
    total: 100,
    delivered: true,
  },
];

// const newArray = [];

// for (let index = 0; index < words.length; index++) {
//   const element = words[index];
//   if (element.length === 5) {
//     newArray.push(element);
//   }
// }

// console.log(newArray);

// const filterArray = words.filter((item) => item.length >= 6);

const filterDelivered = orders.filter(
  (item) => item.delivered && item.total > 100 && item.total < 200,
);

// console.log('original', words);
// console.log('filter', filterArray);
console.log('original', orders);
console.log('filter delivered', filterDelivered);

const search = (query) => {
  return orders.filter((item) => {
    return item.costumerName.includes(query);
  });
};

console.log('buscador', search('Nico'));
