const users = [
  { userID: 1, userName: 'Tom', attributes: ['Nice', 'Cute'] },
  { userID: 2, userName: 'Mike', attributes: ['Lovely'] },
  { userID: 3, userName: 'Nico', attributes: ['Nice', 'Cool'] },
];

const rta = users.map((user) => user.attributes).flat();
const rta1 = users.flatMap((user) => user.attributes);

// console.log('map-flat', rta);
// console.log('flatmap', rta);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita 1',
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: 'Cita 2',
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: 'Cita 3',
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: 'Cita 4',
    },
  ],
};

const rta2 = calendars.primaryCalendar
  .flatMap((calendar) => calendar.startDate)
  .concat(
    calendars.secondaryCalendar.flatMap((calendar) => calendar.startDate),
  );

const rta3 = Object.values(calendars)
  .flat()
  .flatMap((date) => date.startDate);

const rta4 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});

// console.log('calendar', rta2);
// console.log('rta3', rta3);
console.log('rta4', rta4);
