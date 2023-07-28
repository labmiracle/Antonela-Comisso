class Tamagochi {
  nombre: string;
  energia: number;
  sexo: string;
  sentidoDelHumor: number;
  edad: number;
  vecesComida: number;
  vecesBebida: number;

  constructor(nombre: string, sexo: string) {
    this.nombre = nombre;
    this.energia = 100;
    this.sexo = sexo.toUpperCase();
    this.sentidoDelHumor = 3;
    this.edad = 0;
    this.vecesComida = 0;
    this.vecesBebida = 0;
  }

  comer(): void {
    if (this.energia < 100 && this.vecesComida < 5) {
      this.energia = Math.min(this.energia + 25, 100);
      this.vecesComida++;
      console.log(
        `${this.nombre} ha comido y ahora su energía es ${this.energia}`
      );
    } else {
      console.log(`${this.nombre} no puede comer más.`);
    }
  }

  beber(): void {
    if (this.energia < 100 && this.vecesBebida < 5) {
      this.energia = Math.min(this.energia + 25, 100);
      this.vecesBebida++;
      console.log(
        `${this.nombre} ha bebido y ahora su energía es ${this.energia}`
      );
    } else {
      console.log(`${this.nombre} no puede beber más.`);
    }
  }

  dormir(): void {
    console.log(`${this.nombre} está durmiendo.`);
  }

  saltar(): void {
    if (this.energia >= 25) {
      this.energia -= 25;
      console.log(
        `${this.nombre} está saltando y su energía es ${this.energia}`
      );
    } else {
      console.log(`${this.nombre} no tiene suficiente energía para saltar.`);
    }
  }

  correr(): void {
    if (this.energia >= 50) {
      this.energia -= 50;
      console.log(
        `${this.nombre} está corriendo y su energía es ${this.energia}`
      );
    } else {
      console.log(`${this.nombre} no tiene suficiente energía para correr.`);
    }
  }

  caminar(): void {
    if (this.energia >= 10) {
      this.energia -= 10;
      console.log(
        `${this.nombre} está caminando y su energía es ${this.energia}`
      );
    } else {
      console.log(`${this.nombre} no tiene suficiente energía para caminar.`);
    }
  }
}

class TamagochiCollection {
  tamagochis: Tamagochi[];

  constructor() {
    this.tamagochis = [];
  }

  agregarTamagochi(tamagochi: Tamagochi): void {
    this.tamagochis.push(tamagochi);
  }

  eliminarTamagochi(nombre: string): void {
    this.tamagochis = this.tamagochis.filter(
      (tamagochi) => tamagochi.nombre !== nombre
    );
  }

  buscarTamagochi(nombre: string): Tamagochi | undefined {
    return this.tamagochis.find((tamagochi) => tamagochi.nombre === nombre);
  }
}

const tamagochis = new TamagochiCollection();

const tamagochi1 = new Tamagochi("AntoGochi", "F");
const tamagochi2 = new Tamagochi("JuanGochi", "M");

tamagochis.agregarTamagochi(tamagochi1);
tamagochis.agregarTamagochi(tamagochi2);

const tamagochiEncontrado = tamagochis.buscarTamagochi("AntoGochi");
if (tamagochiEncontrado) {
  tamagochiEncontrado.comer();
  tamagochiEncontrado.saltar();
}

tamagochis.eliminarTamagochi("JuanGochi");
console.log(tamagochis.tamagochis);
