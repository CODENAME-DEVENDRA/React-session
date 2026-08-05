const rgb = [255, 200, 0];
console.log(rgb[0]);
console.log(rgb[1]);
console.log(rgb[2]);

//Basic array destructuring
// const [red, green, blue] = rgb;
// console.log("red", red); // Output: 255
// console.log("green", green); // Output: 200
// console.log("blue", blue); // Output: 0

//Skip elements
// const [, , blue] = rgb;
// console.log("blue", blue); // Output: 0

//Rest
// const [red, ...otherColors] = rgb;
// console.log("red", red); // Output: 255
// console.log("otherColors", otherColors); // Output: [200, 0]

//Defaults
// const [red, green, blue, alpha = 1] = rgb;
// console.log("red", red); // Output: 255
// console.log("green", green); // Output: 200
// console.log("blue", blue); // Output: 0
// console.log("alpha", alpha); // Output: 1

//Swapping values
let a = 1;
let b = 2;
console.log("Before swapping: a =", a, ", b =", b); // Output: Before swapping: a = 1 , b = 2
[a, b] = [b, a];
console.log("After swapping: a =", a, ", b =", b); // Output: After swapping: a = 2 , b = 1
