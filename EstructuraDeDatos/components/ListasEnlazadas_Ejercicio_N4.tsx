 deleteDups(): void {
    const valueSet = new Set<T>();
    let currentNode = this.head;
    let prevNode: Node<T> | null = null;

    while (currentNode) {
      if (valueSet.has(currentNode.value)) {
        prevNode!.next = currentNode.next;
        if (currentNode === this.tail) {
          this.tail = prevNode;
        }
        this.size--;
      } else {
        valueSet.add(currentNode.value);
        prevNode = currentNode;
      }

      currentNode = currentNode.next;
    }
  }
