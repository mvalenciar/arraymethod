const names = ['ana', 'santi', 'nico', 'anastasia'];

// function filterByTerm(array, term) {
//   return array.filter((item) => item.includes(term));
// }

function filterByTerm(array, term) {
  return array.filter((word) => {
    return word.toLowerCase().includes(term.toLowerCase());
  });
}

console.log(filterByTerm(names, 'ANA'));
