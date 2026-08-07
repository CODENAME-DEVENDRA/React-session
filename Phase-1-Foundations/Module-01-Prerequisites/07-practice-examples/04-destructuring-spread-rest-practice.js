const userProfile = {
  id: 101,
  name: "John",
  role: "React Developer",
  skills: ["JavaScript", "React", "CSS"],
};

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark", language: "en" };

const themeColors = ["#FFFFFF", "#000000", "#FF0000"];

// ==========================================
// Q1: Object Destructuring (Basic)
// ==========================================
// Goal: Extract properties from an object directly into variables (Common for React props).
//
// Step 1: Use `const { ... } = userProfile` to extract `name` and `role`.
// Step 2: Console log the `name` and `role` variables.
//
// Expected output: "John" "React Developer"

// Your code here:

// ==========================================
// Q2: Object Destructuring (Renaming & Defaults)
// ==========================================
// Goal: Rename a variable while extracting, and set a default value if a property is missing.
//
// Step 1: Extract `id` but rename it to `userId` using `id: userId`.
// Step 2: Extract `status`, but set a default value of `"Online"` using `= "Online"`.
// Step 3: Console log `userId` and `status`.
//
// Expected output: 101 "Online"

// Your code here:

// ==========================================
// Q3: Array Destructuring (The useState way)
// ==========================================
// Goal: Extract items from an array based on their position. (This is exactly how React's useState works!).
//
// Step 1: Use `const [ ... ] = themeColors` to create variables for the first two items.
// Step 2: Name the first variable `primaryColor` and the second `secondaryColor`.
// Step 3: Console log both variables.
//
// Expected output: "#FFFFFF" "#000000"

// Your code here:

// ==========================================
// Q4: Spread Operator (...) for Objects
// ==========================================
// Goal: Merge two objects together. If they have the same keys, the second one overwrites the first.
//
// Step 1: Create a new variable `finalSettings`.
// Step 2: Set it equal to a new object `{}`.
// Step 3: Spread `defaultSettings` first, then spread `userSettings` inside that object.
// Step 4: Console log `finalSettings`.
//
// Expected output: { theme: 'dark', notifications: true, language: 'en' }

// Your code here:

// ==========================================
// Q5: Spread Operator (...) for Arrays
// ==========================================
// Goal: Create a new array that adds an item to the beginning of an existing array.
//
// Step 1: Create a variable `updatedSkills`.
// Step 2: Set it equal to a new array `[]`.
// Step 3: Put the string `"TypeScript"` as the first item, then spread `userProfile.skills` after it.
// Step 4: Console log `updatedSkills`.
//
// Expected output: [ 'TypeScript', 'JavaScript', 'React', 'CSS' ]

// Your code here:

// ==========================================
// Q6: Rest Operator (...) in Destructuring
// ==========================================
// Goal: Extract one property, and bundle all the REMAINING properties into a new object.
//
// Step 1: Destructure `name` from `userProfile`.
// Step 2: In the same curly braces, use `...otherDetails` to gather the rest.
// Step 3: Console log `otherDetails`.
//
// Expected output: { id: 101, role: 'React Developer', skills: [ 'JavaScript', 'React', 'CSS' ] }

// Your code here:

// ==========================================
// Q7: Rest Operator (...) in Functions
// ==========================================
// Goal: Write a function that can accept ANY number of arguments and bundle them into an array.
//
// Step 1: Create a function called `logTechnologies`.
// Step 2: Inside the parentheses, use `...techs` as the parameter.
// Step 3: Console log the `techs` array.
// Step 4: Call the function like this: `logTechnologies("React", "Node", "MongoDB")`.
//
// Expected output: [ 'React', 'Node', 'MongoDB' ]

// Your code here:
