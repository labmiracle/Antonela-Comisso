let cart = [];

const item = {
  name: "test",
  price: 30,
};

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  const newPrice = Object.assign({}, item, { price: price });
  return newPrice;

  // TODO: implement
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  return [...cart, item];
};

console.log(setPrice(item, 50));
console.log(addToCart(cart, "Toy"));
console.log(addToCart(cart, "Ball"));
module.exports = { setPrice, addToCart };
