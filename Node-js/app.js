const http = require("http");

const server = http.createServer((req, res) => {
  const urlPart = req.url.substring(1);
  res.writeHead(200, { "Content-Type": "text/plain" });
  const htmlResponse = `${urlPart}`;
  //res.end(
  //  "Hola este este es un servidor HTTP en Node.js de Anto Comisso para Miracle lab"
  //);
  res.end(htmlResponse);

  console.log("Solicitud recibida:");
  console.log("Método:", req.method);
  console.log("URL actual:", req.url);
  console.log("Encabezados:", req.headers);
});
const port = 5000;

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
