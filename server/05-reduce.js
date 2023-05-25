const totals = [1, 2, 3, 4];

// let suma = 0;

// for (let index = 0; index < totals.length; index++) {
//   const element = totals[index];
//   suma += element;
// }

// console.log(suma);

const suma = totals.reduce((sum, item) => sum + item, 0);

console.log('reduce', suma);
