const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<html><body><h1>Bienvenido a nuestra página principal</h1><p>Encuentra más información en las siguientes páginas:</p><ul><li><a href="/quienes-somos">¿Quiénes somos?</a></li><li><a href="/donde-estamos">¿Dónde estamos?</a></li><li><a href="/que-hacemos">¿Qué hacemos?</a></li><li><a href="/contacto">Contacto</a></li></ul></body></html>'
  );
});

app.get("/quienes-somos", (req, res) => {
  res.send(
    "<html><body><h1>¿Quiénes somos?</h1><p>Somos una empresa dedicada a...</p></body></html>"
  );
});

app.get("/donde-estamos", (req, res) => {
  res.send(
    "<html><body><h1>¿Dónde estamos?</h1><p>Nuestra ubicación es...</p></body></html>"
  );
});

app.get("/que-hacemos", (req, res) => {
  res.send(
    "<html><body><h1>¿Qué hacemos?</h1><p>Nuestros servicios incluyen...</p></body></html>"
  );
});

app.get("/contacto", (req, res) => {
  res.send(
    "<html><body><h1>Contacto</h1><p>Puedes contactarnos en...</p></body></html>"
  );
});

app.use((req, res, next) => {
  res
    .status(404)
    .send("<html><body><h1>404 Archivo no encontrado</h1></body></html>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
