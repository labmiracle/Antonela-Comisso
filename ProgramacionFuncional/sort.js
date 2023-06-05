const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//1. Ordenar por nombre

let nombres = characters.map(function (item, index) {
  return item.name;
});

console.log(nombres.sort());

//2. Ordenar por masa
let masas = characters.map(function (item, index) {
  return item.mass;
});

console.log(masas.sort((a, b) => a - b));
//3. Ordenar por altura
let alturas = characters.map(function (item, index) {
  return item.height;
});

console.log(alturas.sort((a, b) => a - b));

//4. Ordenar por género
let genero = characters.map(function (item, index) {
  return item.gender;
});

console.log(genero.sort());
