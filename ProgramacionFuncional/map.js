//MAP:tiene dos parámetros, item e index y asigna valores de retorno
//personalizados a cada elemento del arreglo

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

//1. Obtener un arreglo de todos los nombres

let nombres = characters.map(function (item, index) {
  return item.name;
});
console.log(nombres);

//2. Obtener un arreglo de todas las alturas

let alturas = characters.map(function (item, index) {
  return item.height;
});
console.log(alturas);

//3. Obtener un arreglo de objetos con las propiedades de nombre y altura

let propiedades = characters.map(function (item, index) {
  return { name: item.name, height: item.height };
});
console.log(propiedades);
