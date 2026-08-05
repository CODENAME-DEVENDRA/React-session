//Traditional functions
function add1(a, b) {
  return a + b;
}
console.log("add1", add1(2, 3)); // Output: 5

//arrow functions ()=>{}
const add2 = (a, b) => {
  return a + b;
};
console.log("add2", add2(2, 3)); // Output: 5

//arrow functions with implicit return
const add3 = (a, b) => a + b;
console.log("add3", add3(2, 3)); // Output: 5

//arrow functions with explicit return
const add4 = (a, b) => {
  a = a + 10; //a+= 10;
  b = b + 10; //b+= 10;
  return a + b;
};
console.log("add4", add4(2, 3)); // Output: 25

const user = () => ({ fname: "Devendra", active: true }); // This will not return an object, it will return undefined because of the way arrow functions handle object literals
console.log("user", user());

const counter = {
  count: 0,
  incrementNormal() {
    setTimeout(function () {
      this.count++;
      console.log("incrementNormal", this.count); // Output: NaN (this refers to the global object, not the counter object)
      console.log("incrementNormal this", this); // Output: Window {...} (in browsers, this refers to the global object)
    }, 0);
  },
  incrementArrow() {
    setTimeout(() => {
      this.count++;
      console.log("incrementArrow", this.count); // Output: 1
      console.log("incrementArrow this", this); // Output: { count: 1, incrementNormal: [Function: incrementNormal], incrementArrow: [Function: incrementArrow] }
    }, 0);
  },
};
counter.incrementNormal();
counter.incrementArrow();
