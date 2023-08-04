const http = require("http");

const server = http.createServer((req, res) => {
  const urlPart = req.url.substring(1);

  res.writeHead(200, { "Content-Type": "text/html" });

  if (urlPart === "miraclelab") {
    res.end("Bienvenido a MiracleLab");
  } else if (urlPart === "about") {
    res.end("Acerca de Nosotros");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 Página no encontrada");
  }

  console.log("Solicitud recibida:");
  console.log("Método:", req.method);
  console.log("URL:", req.url);
  console.log("Encabezados:", req.headers);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
