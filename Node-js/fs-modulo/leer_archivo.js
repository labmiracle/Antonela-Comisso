const fs = require("fs");

const nombreArchivo = "archivo.txt";

fs.readFile(nombreArchivo, "utf8", (err, data) => {
  if (err) {
    console.error(`Error al leer el archivo ${nombreArchivo}:`, err.message);
    process.exit(1);
  }

  console.log("Contenido del archivo:");
  console.log(data);
});
