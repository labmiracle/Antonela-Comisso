//FILTER: es similar a find excepto que devuelve todos los elementos que
//coinciden con un criterio de búsqueda

let filterItems = [
  { name: "jon", age: 20 },
  { name: "linda", age: 22 },
  { name: "jon", age: 40 },
];
let results = filterItems.filter(function (item, index) {
  return item.name === "jon";
});
console.log(results);
