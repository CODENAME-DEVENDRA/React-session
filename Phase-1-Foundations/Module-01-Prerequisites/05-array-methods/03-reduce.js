const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator
console.log("Sum of numbers:", sum); // Output: 15

const cart = [
  { id: 1, name: "Laptop", price: 1000, quantity: 2 },
  { id: 2, name: "Phone", price: 500, quantity: 1 },
  { id: 3, name: "Tablet", price: 800, quantity: 3 },
];

const totalCost = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0); // 0 is the initial value for the total
console.log("Total cost of cart items:", totalCost); // Output: 4900