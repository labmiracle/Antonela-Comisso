function one(arg?: (num: number) => number): number {
  if (arg) {
    return arg(1);
  }
  return 1;
}
function two(arg?: (num: number) => number): number {
  if (arg) {
    return arg(2);
  }
  return 2;
}
function three(arg?: (num: number) => number): number {
  if (arg) {
    return arg(3);
  }
  return 3;
}
function four(arg?: (num: number) => number): number {
  if (arg) {
    return arg(4);
  }
  return 4;
}
function five(arg?: (num: number) => number): number {
  if (arg) {
    return arg(5);
  }
  return 5;
}
function six(arg?: (num: number) => number): number {
  if (arg) {
    return arg(6);
  }
  return 6;
}
function seven(arg?: (num: number) => number): number {
  if (arg) {
    return arg(7);
  }
  return 7;
}
function eight(arg?: (num: number) => number): number {
  if (arg) {
    return arg(8);
  }
  return 8;
}
function nine(arg?: (num: number) => number): number {
  if (arg) {
    return arg(9);
  }
  return 9;
}

function plus(num2: number) {
  return (num: number): number => num + num2;
}

function minus(num2: number) {
  return (num: number): number => num - num2;
}

function dividedBy(num2: number) {
  return (num: number): number => Math.floor(num / num2);
}

function times(num2: number) {
  return (num: number): number => num2 * num;
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
