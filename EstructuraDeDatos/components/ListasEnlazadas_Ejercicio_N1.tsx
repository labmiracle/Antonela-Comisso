import React from "react";

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
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
}

const LinkedListExample: React.FC = () => {
  const linkedList = new LinkedList<number>();

  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);

  linkedList.remove(2);

  const node = linkedList.find(3);

  console.log(linkedList);
  console.log(node);

  return (
    <div>
      <h2>Listas enlazadas: Ejercicio N°1</h2> En la consola del navegador se
      pueden ver los resultados. Presione F12.
    </div>
  );
};

export default LinkedListExample;
