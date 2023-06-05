//FILTER: es similar a find excepto que devuelve todos los elementos que
//coinciden con un criterio de búsqueda

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

//1. Obtener personajes con masa superior a 100
let results = characters.filter(function (item, index) {
  return item.mass > 100;
});

//2. Obtener personajes con una altura inferior a 200
let results2 = characters.filter(function (item, index) {
  return item.height < 200;
});

//3. Obtener todos los personajes masculinos
let results3 = characters.filter(function (item, index) {
  return item.gender === "male";
});

//4. Obtener todos los personajes femeninos
let results4 = characters.filter(function (item, index) {
  return item.gender === "female";
});
