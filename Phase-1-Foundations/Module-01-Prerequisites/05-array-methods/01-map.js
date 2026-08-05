const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((num, index, arr) => {
  return `Index: ${index}, Value: ${num}, Array: ${arr}`;
});
console.log(result);

//basic transform
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//transform with array of objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userNames = users.map((user) => user.name.toUpperCase());
console.log(userNames); // Output: ["ALICE", "BOB", "CHARLIE"]

//list items
const listItems = numbers.map((num) => `<li>${num}</li>`);
console.log(listItems); // Output: ["<li>1</li>", "<li>2</li>", "<li>3</li>", "<li>4</li>", "<li>5</li>"]

//In react (JSX)
{
  /* <ul>
    {numbers.map(num => (
        <li key={num}>{num}</li>
    ))}
</ul> */
}

//forEach vs map
const resultForEach = numbers.forEach((num) => num * num);
console.log(resultForEach); // Output: undefined (forEach does not return a new array, it returns undefined)
