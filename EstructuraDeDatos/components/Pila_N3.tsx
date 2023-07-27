import { Stack } from "./Pila_N1";

function decimalToBase(decimalNumber: number, base: number): string {
  const stack = new Stack<number>();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (decimalNumber === 0) {
    return "0";
  }

  if (base < 2 || base > 36) {
    throw new Error("Base must be between 2 and 36.");
  }

  while (decimalNumber > 0) {
    const remainder = decimalNumber % base;
    stack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  let result = "";

  while (stack.size() > 0) {
    const digitIndex = stack.pop();
    if (digitIndex !== undefined) {
      result += digits[digitIndex];
    }
  }

  return result;
}
