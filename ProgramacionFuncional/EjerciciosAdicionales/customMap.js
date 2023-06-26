function customMap(array, myFunction) {
  let newArray = [];
  for (element of array) {
    newArray.push(myFunction(element));
  }
  return newArray;
}
