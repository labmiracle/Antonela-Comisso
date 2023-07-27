export class Queue<T> {
  protected data: T[];

  constructor() {
    this.data = [];
  }

  enqueue(item: T): void {
    this.data.push(item);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  size(): number {
    return this.data.length;
  }
}
