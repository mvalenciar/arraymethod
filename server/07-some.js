// const numbers = [1, 2, 3, 4];

// let rta = false;

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if (element % 2 === 0) {
//     rta = true;
//     break;
//   }
// }

// const rta1 = numbers.some((item) => item % 2 === 0);

// console.log('rta', rta);
// console.log('rta1', rta1);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'cena',
  },
];

const newApointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      {
        start: newDate.startDate,
        end: newDate.endDate,
      },
    );
  });
};

console.log(isOverlap(newApointment));
