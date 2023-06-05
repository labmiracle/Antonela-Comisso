//reduce: La función de reducción toma cada elemento del arreglo y, según la
//lógica personalizada, crea un único valor final

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

//1. Obtener la masa total de todos los personajes
let massas = characters.map(function (item, index) {
  return Number(item.mass);
});

const initialValue = 0;
const masaTotal = massas.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

//2. Obtener la altura total de todos los caracteres
let alturas = characters.map(function (item, index) {
  return Number(item.height);
});

const alturaTotal = alturas.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

//3. Obtener el número total de caracteres en todos los nombres de los personajes
let nombres = characters.map(function (item, index) {
  return item.name;
});

const caracteres = nombres.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

let caracteresTotal = caracteres.split(" ").join("").length;

//4. Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar)
let colores = characters.map(function (item, index) {
  return item.eye_color.length;
});
