// FIND: permite tomar la primera instancia de un elemento de un arreglo que
//coincida con sus criterios de búsqueda

const items = [
  { name: "jon", age: 20 },
  { name: "linda", age: 22 },
  { name: "jon", age: 40 },
];
const jon = items.find((item) => {
  return item.name === "jon";
});
console.log(jon);
