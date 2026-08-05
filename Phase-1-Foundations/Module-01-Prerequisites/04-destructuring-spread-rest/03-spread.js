//Arrays

//Combine
const arr1 = [1, 2, 3]; //xyz
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]); // Output: [1, 2, 3, 4, 5, 6]

//Copy
const arr3 = [...arr1];
console.log(arr3); // Output: [1, 2, 3]

//Insert elements
const arr4 = [0, ...arr1, 7];
console.log(arr4); // Output: [0, 1, 2, 3, 7]

//Objects

//Combine
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }

//Copy
const obj4 = { ...obj1 };
console.log(obj4); // Output: { a: 1, b: 2 }

//Insert properties
const user = { name: "John Doe" };
const userWithAge = { ...user, age: 30 };
console.log(userWithAge); // Output: { name: 'John Doe', age: 30 }
