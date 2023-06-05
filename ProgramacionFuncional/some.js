//Función some
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

//1. ¿Hay al menos un personaje masculino?
let genero = characters.map(function (item, index) {
  return item.gender;
});

function isMAle(element, index, array) {
  return element === "male";
}
console.log(genero.some(isMAle));

//2. ¿Hay al menos un personaje con ojos azules?
const eye_color = characters.map(function (item, index) {
  return item.eye_color;
});

function isBlue(element, index, array) {
  return element === "blue";
}
console.log(eye_color.some(isBlue));

//3. ¿Hay al menos un personaje más alto que 200?
let alturas = characters.map(function (item, index) {
  return item.height;
});
function isHigherThan(element, index, array) {
  return element > 200;
}
console.log(alturas.some(isHigherThan));

//4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
let masas = characters.map(function (item, index) {
  return item.mass;
});
function isLessThan(element, index, array) {
  return element < 50;
}
console.log(masas.some(isLessThan));
