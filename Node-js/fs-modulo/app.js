const http = require("http");
const fs = require("fs");
const path = require("path");
const serverConfig = require("./serverConfig");

const port = serverConfig.port;
const host = serverConfig.host;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/about") {
    const filePath = path.join(__dirname, "vistas", "about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write(
          "<html><body><h1>Error interno del servidor</h1></body></html>"
        );
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<html><body><h1>404 Archivo no encontrado</h1></body></html>");
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
