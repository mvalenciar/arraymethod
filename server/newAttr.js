const array = [
  {
    name: 'Product 1',
    price: 1000,
    stock: 10,
  },
  {
    name: 'Product 2',
    price: 2000,
    stock: 20,
  },
];

function addNewAttr(param) {
  const rta = param.map((item) => {
    return {
      ...item,
      taxes: Math.trunc(item.price * 0.19),
    };
  });
  console.log('rta', rta);
}

addNewAttr(array);

console.log('original', array);
