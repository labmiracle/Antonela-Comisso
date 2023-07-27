import { Queue } from "./Cola_N1";

class CircularQueue<T> extends Queue<T> {
  private currentIndex: number;

  constructor() {
    super();
    this.currentIndex = 0;
  }

  passPotato(): T | undefined {
    if (this.size() <= 1) {
      console.log("El juego ha terminado.");
      return this.dequeue();
    }

    const currentPlayer = this.data[this.currentIndex];
    console.log(`El jugador ${currentPlayer} pasó la papa caliente.`);

    this.currentIndex = (this.currentIndex + 1) % this.size();

    return this.dequeue();
  }
}
