// Arithmetic
let a = 10,
  b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let x = 5;
console.log("Post-increment:", x++); // 5, then x becomes 6
console.log("After post-increment:", x); // 6
console.log("Pre-increment:", ++x); // 7

// Assignment
let num = 10;
num += 5; // num = num + 5
console.log("Assignment operators:", num);

// Comparison
console.log("Loose equality (5 == '5'):", 5 == "5"); // true
console.log("Strict equality (5 === '5'):", 5 === "5"); // false
console.log("Not equal:", 5 !== 10);
console.log("Greater than:", 10 > 5);
console.log("Less than or equal:", 5 <= 5);

// Logical
console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !false);

// Ternary
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary operator:", canVote);

// Nullish coalescing (??)
const value1 = null ?? "default";
const value2 = 0 ?? "default";
console.log("Nullish coalescing:", value1, value2);
