//
// Note. ESM module should be placed in file *.mjs to be executed via BodeJS like:
// $ node ModuleUsageExample.mjs
//

const privateValue = "This is a value private to the module!";

export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}

export function addViaReduce(...args) {
  return args.reduce((acc, cur) => cur + acc);
}

export function multiplyViaReduce(...args) {
  return args.reduce((acc, cur) => cur * acc);
}
