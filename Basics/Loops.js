// JavaScript Loops
// for loop
console.log("For loop:");
for (let i = 0; i < 3; i++) {
  console.log(`  Iteration ${i}`);
}

// while loop
console.log("While loop:");
let count = 0;
while (count < 3) {
  console.log(`  Count: ${count}`);
  count++;
}

// do-while loop
console.log("Do-while loop:");
let num2 = 0;
do {
  console.log(`  Number: ${num2}`);
  num2++;
} while (num2 < 3);

// for...of (arrays, strings)
console.log("For...of loop:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(`  Color: ${color}`);
}

// for...in (object keys)
console.log("For...in loop:");
const car = { brand: "Tesla", model: "Model 3", year: 2023 };
for (const key in car) {
  console.log(`  ${key}: ${car[key]}`);
}

// forEach (array method)
console.log("forEach method:");
colors.forEach((color, index) => {
  console.log(`  ${index}: ${color}`);
});

// break and continue
console.log("Break and continue:");
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip 3
  if (i === 7) break; // Stop at 7
  console.log(`  Value: ${i}`);
}
