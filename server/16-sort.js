const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);
const words = [
  'reservé',
  'premier',
  'comunique',
  'café',
  'adieu',
  'éclair',
  'banana',
];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
const orders = [
  {
    costumerName: 'Nicolas',
    total: 60,
    delivered: true,
    date: new Date(2023, 1, 1, 10, 30),
  },
  {
    costumerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 8),
  },
  {
    costumerName: 'Santiago',
    total: 180,
    delivered: true,
    date: new Date(2023, 1, 1, 6),
  },
  {
    costumerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2022, 1, 1, 6),
  },
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);
