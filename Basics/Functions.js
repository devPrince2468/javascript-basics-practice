// Functions
// → Declaration, Expression, Arrow functions, Default parameters

// Function Declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Function declaration:", greet("Alice"));

// Function Expression (not hoisted)
const sayHi = function (name) {
  return `Hi, ${name}!`;
};
console.log("Function expression:", sayHi("Bob"));

// Arrow Function (modern)
const multiply = (a, b) => a * b;
const square = (x) => x * x; // Single param, no parentheses
const getRandom = () => Math.random(); // No params
console.log("Arrow functions:", multiply(5, 3), square(4));

// Default Parameters
function greetWithDefault(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log("Default params:", greetWithDefault());
console.log("Default params:", greetWithDefault("Charlie", "Hi"));

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest parameters:", sum(1, 2, 3, 4, 5));

// Function returning object
const createPerson = (name, age) => ({ name, age });
console.log("Return object:", createPerson("David", 30));

// Closure example
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}
const counter = makeCounter();
counter.increment();
counter.increment();
console.log("Closure counter:", counter.getCount());
