//
// Note. ESM module should be placed in file *.mjs to be executed via BodeJS like:
// $ node ModuleUsageExample.mjs
//

import add, { multiply, subtract, square } from "./ModuleExample.mjs";

console.log('add(2,2) usage from ModuleExample.mjs => ', add(2, 2));
console.log('multiply(2,2) usage from ModuleExample.mjs => ', multiply(2, 2));
console.log('subtract(10,2) usage from ModuleExample.mjs => ', subtract(10, 2));
console.log('square(12) usage from ModuleExample.mjs => ', square(12));
