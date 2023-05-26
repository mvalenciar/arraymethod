const elements = ['fire', 'water', 'earth'];

let rtaFinal = '';
const separator = '--';

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal += element + separator;
}

const rtaJoin = elements.join('--');

console.log('for', rtaFinal);
console.log('Join', rtaJoin);

const title = 'Curso De Manipulación De Arrays';
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log('split And Join', urlFinal);
