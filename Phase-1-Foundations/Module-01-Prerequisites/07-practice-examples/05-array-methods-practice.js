const developers = [
  { id: 1, name: "John", role: "React", tasks: 5, active: true },
  { id: 2, name: "Asha", role: "Backend", tasks: 2, active: false },
  { id: 3, name: "Ravi", role: "React", tasks: 8, active: true },
  { id: 4, name: "Tara", role: "Design", tasks: 4, active: true },
];

// ==========================================
// Q1: map (Transform items)
// ==========================================
// Goal: Create an array of just the names.
//
// Step 1: Use `developers.map()`.
// Step 2: Return only the `name` property.
// Step 3: Console log the result.
//
// Expected output: [ 'John', 'Asha', 'Ravi', 'Tara' ]

// Your code here:

// ==========================================
// Q2: filter (Keep specific items)
// ==========================================
// Goal: Get all developers who work on "React".
//
// Step 1: Use `developers.filter()`.
// Step 2: Return true if `role` is "React".
// Step 3: Console log the result.
//
// Expected output: [ { id: 1... }, { id: 3... } ]

// Your code here:

// ==========================================
// Q3: find & findIndex (Get one item)
// ==========================================
// Goal: Find the first inactive developer and their position in the array.
//
// Step 1: Use `.find()` to get the developer where `active === false`.
// Step 2: Use `.findIndex()` to get the index where `active === false`.
// Step 3: Console log both results.
//
// Expected output:
// { id: 2, name: 'Asha', role: 'Backend', tasks: 2, active: false }
// Index: 1

// Your code here:

// ==========================================
// Q4: some & every (True/False checks)
// ==========================================
// Goal: Check if ANY dev is inactive, and check if ALL devs are active.
//
// Step 1: Use `.some()` to check if any dev has `active === false`. Log it.
// Step 2: Use `.every()` to check if all devs have `active === true`. Log it.
//
// Expected output:
// Has inactive? true
// All active? false

// Your code here:

// ==========================================
// Q5: reduce (Calculate a total)
// ==========================================
// Goal: Find the total number of tasks completed by everyone.
//
// Step 1: Use `developers.reduce((total, dev) => { ... }, 0)`.
// Step 2: Inside the function, add `dev.tasks` to `total` and return it.
// Step 3: Console log the final number.
//
// Expected output: 19

// Your code here:

// ==========================================
// Q6: Chaining (filter + map)
// ==========================================
// Goal: Get just the NAMES of developers who are ACTIVE.
//
// Step 1: `developers.filter(...)` to keep only active devs.
// Step 2: Add `.map(...)` right after it to get their names.
// Step 3: Console log the result.
//
// Expected output: [ 'John', 'Ravi', 'Tara' ]

// Your code here:

// ==========================================
// Q7: CRUD - Create (Add a new developer)
// ==========================================
// Goal: Add a new developer without modifying the original array (React State style).
//
// Step 1: Create a `newDev` object with id 5 and your name.
// Step 2: Create a new array called `newDevList`.
// Step 3: Use the spread operator `[...developers, newDev]` to combine them.
// Step 4: Console log `newDevList`.
//
// Expected output: An array with 5 developers.

// Your code here:

// ==========================================
// Q8: CRUD - Update (Edit an existing developer)
// ==========================================
// Goal: Change Asha's `active` status to `true`.
//
// Step 1: Create `updatedDevList = developers.map(...)`.
// Step 2: If the dev's `id === 2`, return `{ ...dev, active: true }`.
// Step 3: Otherwise, just return the `dev` as is.
// Step 4: Console log `updatedDevList`.
//
// Expected output: Array where Asha (id 2) has active: true.

// Your code here:

// ==========================================
// Q9: CRUD - Delete (Remove a developer)
// ==========================================
// Goal: Remove Tara (id: 4) from the list.
//
// Step 1: Create `filteredList = developers.filter(...)`.
// Step 2: Keep only developers where `id !== 4`.
// Step 3: Console log `filteredList`.
//
// Expected output: Array with only John, Asha, and Ravi (3 items).

// Your code here:
