//----const----- (Cannot REASSIGN)
const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned //Uncaught TypeError: Assignment to constant variable.

//----let----- (Can be REASSIGN)
let radius = 5;
radius = 10; // This is allowed because radius is declared with let and can be reassigned
console.log(radius); // Output: 10

//block scope example
{
  const message = "Hello, World!";
  console.log("inside block", message); // Output: Hello, World!
}
// console.log("outside block", message); //Uncaught ReferenceError: message is not defined

function testScope() {
  if (true) {
    var localVar = "I am local to this block";
    console.log(localVar); // Output: I am local to this block
  }

  return localVar; //Uncaught ReferenceError: localVar is not defined
}
// console.log("outside function", localVar);
// console.log(testScope());

//var pollutes the global object in non-module scripts
var x = 1;
console.log(x);
console.log(window.x); // Output: 1 (in browsers, var declarations are added to the global object)

// Rule of thumb : default to const, use let only when you need to reassign, avoid var
