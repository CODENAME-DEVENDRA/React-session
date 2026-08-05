//Default parameters

function multiply(a, b = 1) {
  console.log({ a, b });
  return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Rest parameters

function sum(...numbers) {
  console.log("numbers", numbers);
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

function greet(greeting, name, ...names) {
  console.log("greeting", greeting);
  console.log("name", name);
  console.log("names", names);
  return `${greeting} ${name}, ${names.join(", ")}`;
}
console.log(greet("Hello", "Good morning", "Bob", "Charlie")); //Hello Good morning, Bob, Charlie
