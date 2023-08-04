const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/dirname") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`El valor de __dirname es: ${__dirname}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<html><body><h1>404 Archivo no encontrado</h1></body></html>");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
