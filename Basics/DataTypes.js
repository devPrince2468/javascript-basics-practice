// String
const str1 = "Double quotes";
const str2 = "Single quotes";
const str3 = `Template literal with ${str1}`;
console.log("String:", str3);

// Number
const integer = 42;
const decimal = 3.14;
const negative = -10;
console.log("Numbers:", integer, decimal, negative);

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// Boolean
const isTrue = true;
const isFalse = false;
console.log("Boolean:", isTrue, isFalse);

// Undefined
let notAssigned;
console.log("Undefined:", notAssigned);

// Null
const empty = null;
console.log("Null:", empty);

// Symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log("Symbols unique:", symbol1 === symbol2); // false

// Object
const user = {
  name: "Alice",
  age: 25,
  isActive: true,
  address: {
    city: "NYC",
    zip: "10001",
  },
};
console.log("Object:", user);

// Array
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "text", true, null, { key: "value" }];
console.log("Arrays:", fruits, mixed);

// Type checking
console.log("typeof object:", typeof user);
console.log("typeof null:", typeof null); // object (quirk in JS)
console.log("typeof string:", typeof "hello");
console.log("typeof number:", typeof 42);
console.log("typeof boolean:", typeof true);
console.log("Array.isArray:", Array.isArray(fruits));
