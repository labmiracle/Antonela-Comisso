const axios = require("axios");

const apiUrl =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";

async function getEarthquakesByMagnitude(minMagnitude) {
  try {
    if (!minMagnitude || isNaN(minMagnitude)) {
      console.error(
        "Debe proporcionar un valor numérico para la magnitud de los terremotos."
      );
      process.exit(1);
    }

    const response = await axios.get(apiUrl);
    const data = response.data;
    const earthquakes = data.features.filter(
      (earthquake) => earthquake.properties.mag >= minMagnitude
    );

    console.log("****************************");
    console.log("USGS All Earthquakes, Past Hour");
    console.log("---------------------");
    console.log(`total: ${earthquakes.length}`);
    console.log("status:", response.status);
    console.log("---------------------");

    earthquakes.forEach((earthquake) => {
      const { mag, place, time, status, type, url, detail, coordinates } =
        earthquake.properties;
      console.log(new Date(time));
      console.log("==============================");
      console.log(`M ${mag} - ${place}`);
      console.log(new Date(time));
      console.log(`Magnitud: ${mag}`);
      console.log(`Estatus: ${status}`);
      console.log(`Tipo: ${type}`);
      console.log(`Lugar: ${place}`);
      console.log(`Coordenadas: ${coordinates.join(" , ")}`);
      console.log(`Info: ${url}`);
      console.log(`Detalles: ${detail}`);
      console.log("==============================");
    });
  } catch (error) {
    console.error("Error al obtener los datos de terremotos:", error.message);
    process.exit(1);
  }
}

const minMagnitude = parseFloat(process.argv[2]);

getEarthquakesByMagnitude(minMagnitude);
