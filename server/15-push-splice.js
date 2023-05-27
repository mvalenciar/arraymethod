const products = [
  {
    name: 'Pizza',
    price: 121,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 121,
    id: '🍔',
  },
  {
    name: 'Hot Cakes',
    price: 121,
    id: '🥞',
  },
];

const myProducts = [];

const productIndex = products.findIndex((product) => product.id === '🍔');

if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const productsV2 = [
  {
    name: 'Pizza',
    price: 121,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 121,
    id: '🍔',
  },
  {
    name: 'Hot Cakes',
    price: 121,
    id: '🥞',
  },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicioso',
  },
};

const productIndexV2 = productsV2.findIndex(
  (product) => product.id === update.id,
);

productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes,
};

console.log('products V2', productsV2);
