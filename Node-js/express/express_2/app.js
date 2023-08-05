const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

let shoppingList = [
  { id: 1, name: "articulo uno", price: 111 },
  { id: 2, name: "articulo dos", price: 222 },
  { id: 3, name: "articulo tres", price: 333 },
];

app.get("/items", (req, res) => {
  res.json(shoppingList);
});

app.post("/items", (req, res) => {
  const newItem = {
    id: shoppingList.length + 1,
    name: req.body.name,
    price: parseFloat(req.body.price),
  };

  if (newItem.name && !isNaN(newItem.price)) {
    shoppingList.push(newItem);
    res.json(newItem);
  } else {
    res.status(400).json({ error: "Nombre y precio son campos requeridos." });
  }
});

app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = shoppingList.find((item) => item.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "El artículo no existe" });
  }
});

app.patch("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = shoppingList.find((item) => item.id === itemId);
  if (item) {
    item.name = req.body.name || item.name;
    item.price = parseFloat(req.body.price) || item.price;
    res.json(item);
  } else {
    res.status(404).json({ error: "El artículo no existe" });
  }
});

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  shoppingList = shoppingList.filter((item) => item.id !== itemId);
  res.json({ message: "Artículo eliminado correctamente" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
