const articles = [
  { id: 1, title: "React UI Tips" },
  { id: 2, title: "JavaScript Async Guide" },
];

// Simulates a network request. Takes 300ms.
const fetchArticle = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const article = articles.find((a) => a.id === id);
      if (article) {
        resolve(article);
      } else {
        reject("Error: Article missing");
      }
    }, 300);
  });
};

// ==========================================
// Q1: Basic Async / Await
// ==========================================
// Goal: Fetch an article and print it.
//
// Step 1: Write an `async` function.
// Step 2: Use `await` to call `fetchArticle(1)`.
// Step 3: `console.log` the result.
//
// Expected output: { id: 1, title: 'React Native UI Tips' }

// Your code here:

// ==========================================
// Q2: Try / Catch
// ==========================================
// Goal: Handle an error when an article doesn't exist.
//
// Step 1: Write an `async` function.
// Step 2: Add a `try { } catch (error) { }` block.
// Step 3: Inside `try`, `await fetchArticle(99)`.
// Step 4: Inside `catch`, `console.log(error)`.
//
// Expected output: "Error: Article missing"

// Your code here:

// ==========================================
// Q3: Returning a value from Async
// ==========================================
// Goal: Return data out of an async function, then use .then()
//
// Step 1: Write an `async` function called `getTitle`.
// Step 2: Inside it, `await fetchArticle(2)`.
// Step 3: `return` just the title property.
// Step 4: Outside the function, call `getTitle().then(data => console.log(data))`
//
// Expected output: "JavaScript Async Guide"

// Your code here:

// ==========================================
// Q4: Promise.all (Parallel)
// ==========================================
// Goal: Fetch two articles at the exact same time.
//
// Step 1: Write an `async` function.
// Step 2: Create a variable `results = await Promise.all([ ... ])`.
// Step 3: Inside the array, call `fetchArticle(1)` and `fetchArticle(2)`.
// Step 4: `console.log(results)`.
//
// Expected output: [ { id: 1... }, { id: 2... } ]

// Your code here:

// ==========================================
// Q5: Classic .then() / .catch()
// ==========================================
// Goal: Do the same thing without using the word `await`.
//
// Step 1: Call `fetchArticle(1)` (do not use await).
// Step 2: Chain `.then(data => console.log(data))` to it.
// Step 3: Chain `.catch(error => console.log(error))` at the end.
//
// Expected output: { id: 1, title: 'React Native UI Tips' }

// Your code here:
