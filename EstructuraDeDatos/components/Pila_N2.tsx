import { Stack } from "./Pila_N1";

function decimalToBinary(decimalNumber: number): string {
  const stack = new Stack<number>();

  if (decimalNumber === 0) {
    return "0";
  }

  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    stack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  let binaryResult = "";

  while (stack.size() > 0) {
    const bit = stack.pop();
    if (bit !== undefined) {
      binaryResult += bit.toString();
    }
  }

  return binaryResult;
}
