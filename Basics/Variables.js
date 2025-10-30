console.log("--- 1. VARIABLES ---");

// var (old way - avoid)
var oldVariable = "I'm a var";
var oldVariable = "Can redeclare"; // Works but not recommended
console.log("var:", oldVariable);

// let (modern - block scoped)
let modernVariable = "I'm a let";
modernVariable = "Can reassign";
console.log("let:", modernVariable);

// const (modern - constant)
const constant = "I'm a const";
// constant = "Error"; // ❌ Cannot reassign
console.log("const:", constant);

// const with objects (properties can change)
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed
person.age = 30; // ✅ Allowed
console.log("const object:", person);
// const with arrays (elements can change)
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
console.log("const array:", numbers);
