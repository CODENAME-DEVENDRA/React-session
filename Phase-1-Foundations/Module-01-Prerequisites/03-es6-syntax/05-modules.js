// import { PI, square } from "./utilities.js"; //Named imports
// import cube from "./utilities.js"; //Default import

import cube, { PI, square } from "./utilities.js"; //Combined import

console.log(PI); //3.14159
console.log(square(5)); //25
console.log(cube(3)); //27
