class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: BinaryTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new BinaryTreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(
    node: BinaryTreeNode<T>,
    newNode: BinaryTreeNode<T>
  ): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  private inOrderTraversalNode(
    node: BinaryTreeNode<T> | null,
    result: T[]
  ): void {
    if (node) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderTraversalNode(this.root, result);
    return result;
  }

  private preOrderTraversalNode(
    node: BinaryTreeNode<T> | null,
    result: T[]
  ): void {
    if (node) {
      result.push(node.value);
      this.preOrderTraversalNode(node.left, result);
      this.preOrderTraversalNode(node.right, result);
    }
  }

  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderTraversalNode(this.root, result);
    return result;
  }

  private postOrderTraversalNode(
    node: BinaryTreeNode<T> | null,
    result: T[]
  ): void {
    if (node) {
      this.postOrderTraversalNode(node.left, result);
      this.postOrderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }

  countElements(): number {
    return this.countElementsNode(this.root);
  }

  private countElementsNode(node: BinaryTreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return (
      1 + this.countElementsNode(node.left) + this.countElementsNode(node.right)
    );
  }

  findMin(): T | null {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  findMax(): T | null {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }
}

export default function Arbol(): any {
  const Arbol = new BinaryTree<number>();
  Arbol.insert(5);
  Arbol.insert(3);
  Arbol.insert(7);
  Arbol.insert(2);
  Arbol.insert(4);
  Arbol.insert(6);
  Arbol.insert(8);

  console.log("In-order traversal:", Arbol.inOrderTraversal());
  console.log("Pre-order traversal:", Arbol.preOrderTraversal());
  console.log("Post-order traversal:", Arbol.postOrderTraversal());

  console.log("Number of elements in the tree:", Arbol.countElements());
  console.log("Minimum value in the tree:", Arbol.findMin());
  console.log("Maximum value in the tree:", Arbol.findMax());

  return (
    <div>
      <h2>Arbol</h2>
      En la consola del navegador se pueden ver los resultados. Presione F12.
    </div>
  );
}
