const numbers1 = [2, 4, 5, 6, 8];
const numbers2 = [1, 1, -2, -3];

function multiplyElements(numbersList) {
  const rta = numbersList.map((item) => item * 2);
  console.log(rta);
}
multiplyElements(numbers1);
multiplyElements(numbers2);
