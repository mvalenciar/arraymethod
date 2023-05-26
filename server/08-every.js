const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

function isUnderFifteenYearsOld(teamMembers) {
  const check = teamMembers.every((member) => member.age < 15);
  const olderThanFifteen = teamMembers.filter((member) => member.age > 15);
  if (!check) {
    console.log('El equipo tiene miembros mayores de 15 años');
    console.log('Los siguientes miembros son mayores de 15', olderThanFifteen);
  } else {
    console.log(
      'Los miembros cumplen con los requisitos para entrar el equipo',
    );
  }
}

// console.log(isUnderFifteenYearsOld);

isUnderFifteenYearsOld(team);
