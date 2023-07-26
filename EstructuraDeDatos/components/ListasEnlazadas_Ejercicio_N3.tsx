import React from "react";

class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  remove(value: T): void {
    let currentNode = this.head;
    let prevNode: Node<T> | null = null;

    while (currentNode) {
      if (currentNode.value === value) {
        if (prevNode) {
          prevNode.next = currentNode.next;
          if (currentNode === this.tail) {
            this.tail = prevNode;
          }
        } else {
          this.head = currentNode.next;
          if (!currentNode.next) {
            this.tail = null;
          }
        }
        this.size--;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  find(value: T): Node<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  invert(): void {
    let currentNode = this.head;
    let prevNode: Node<T> | null = null;
    let nextNode: Node<T> | null = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }
}

class DoublyLinkedList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  add(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  remove(value: T): void {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }

        this.size--;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  invert(): void {
    let currentNode = this.head;

    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;

      currentNode = temp;
    }

    const tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
  }
}
const DoublyLinkedListEjercicioN3: React.FC = () => {
  const doublyLinkedList = new DoublyLinkedList<number>();

  doublyLinkedList.add(1);
  doublyLinkedList.add(2);
  doublyLinkedList.add(3);
  doublyLinkedList.add(4);

  console.log("Original:", doublyLinkedList);

  doublyLinkedList.invert();

  console.log("Inverted:", doublyLinkedList);

  return (
    <div>
      <h2>Listas doblemente enlazadas: Ejercicio N°3</h2>
      En la consola del navegador se pueden ver los resultados. Presione F12.
    </div>
  );
};

export default DoublyLinkedListEjercicioN3;
