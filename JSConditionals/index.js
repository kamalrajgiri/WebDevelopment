console.log("Hello I am Conditional Tutorial");

let age = 25;
let grace = 2;
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);
// console.log(age + + grace);
// console.log(age - - grace);
age+= grace;
if (age > 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
let x= 20;
let y= 10;
// Assigned operators
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y
x **= y; // x = x ** y
console.log(x);
// Comparison operators
let a = 5;
let b = 10;
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// Logical operators
let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);
// Ternary operator
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can you vote? " + canVote);
// Nested if-else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}
