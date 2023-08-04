const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(
    "Hola este es un servidor HTTP en Node.js hecho por Anto Comisso para MiracleLab!"
  );
});

const port = 5000;

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
