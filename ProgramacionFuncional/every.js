//Función every
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

//1. ¿Todos los personajes tienen ojos azules?
const eye_color = characters.map(function (item, index) {
  return item.eye_color;
});

function checkEye(eye) {
  return eye === "blue";
}

console.log(eye_color.every(checkEye));

//2. ¿Todos los personajes tienen una masa superior a 40?
let masas = characters.map(function (item, index) {
  return item.mass;
});
function checkMass(mass) {
  return mass > 40;
}

console.log(masas.every(checkMass));

//3. ¿Todos los caracteres son más bajos que 200?
let alturas = characters.map(function (item, index) {
  return item.height;
});
function checkHeight(height) {
  return height < 200;
}

console.log(alturas.every(checkHeight));

//4. ¿Todos los personajes son hombres?
let genero = characters.map(function (item, index) {
  return item.gender;
});

function checkGender(gender) {
  return gender === "male";
}

console.log(genero.every(checkGender));
