const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

//1. Mapealo a un arreglo de strings: firstName-lastName: role
let usersString = users.map(function (item, index) {
  return item.firstName + "-" + item.lastName + ": " + item.role;
});

console.log(usersString);

//2. Filtra aquellos usuarios con role de Full Stack Resident
let FSR = users.filter(function (item, index) {
  return item.role === "Full Stack Resident";
});

//3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo con los objetos usuarios que tienen dicho role
let EI = users.filter(function (item, index) {
  return item.role === "Enterprise Instructor";
});
let LI = users.filter(function (item, index) {
  return item.role === "Lead Instructor";
});
let I = users.filter(function (item, index) {
  return item.role === "Instructor";
});

("Lead Instructor");
let newObj = {
  FullStackResident: FSR,
  EnterpriseInstructor: EI,
  LeadInstructor: LI,
  Instructor: I,
};

console.log(newObj);

//4. Genera una función de búsqueda de un usuario por firstName con find
function firstName(nom) {
  let usuario = users.find((item) => {
    return item.firstName === nom;
  });
  return usuario;
}
console.log(firstName("Chloe"));
