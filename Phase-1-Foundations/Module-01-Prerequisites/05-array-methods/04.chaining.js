const order = [
  { id: 1, name: "Laptop", price: 1000, quantity: 2, status: "paid" },
  { id: 2, name: "Phone", price: 500, quantity: 1, status: "pending" },
  { id: 3, name: "Tablet", price: 800, quantity: 3, status: "paid" },
  { id: 4, name: "Monitor", price: 300, quantity: 1, status: "pending" },
];

//calculate paid orders total cost
const paidOrdersTotalCost = order
  .filter((item) => item.status === "paid") // Filter only paid orders
  .reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total cost of paid orders
console.log("Total cost of paid orders:", paidOrdersTotalCost); // Output: 3400
