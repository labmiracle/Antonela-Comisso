function ADN(cadena) {
  let cadenaArray = cadena.split("");
  let newADN = [];
  for (item of cadenaArray) {
    if (item == "A") {
      newADN.push(item);
    }
    if (item == "G") {
      newADN.push(item);
    }
    if (item == "T") {
      newADN.push(item);
    }
    if (item == "C") {
      newADN.push(item);
    }
  }

  return newADN.join("");
}

ADN("AnvwrignpaingGAT ñksjgñskfjgTtttt");
module.exports = { ADN };
