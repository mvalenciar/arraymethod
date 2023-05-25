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
];

// const rta = orders.map((item) => item.total);
// console.log('original', orders);
// console.log('map', rta);

// const rta2 = orders.map((item) => {
//   const newItem = item;
//   newItem.tax = 0.19;
//   return item;
// });

// console.log('original', orders);
// console.log('rta2', rta2);

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log('original', orders);
console.log('rta2', rta3);
