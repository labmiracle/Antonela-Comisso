export class Stack<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  size(): number {
    return this.data.length;
  }
}
