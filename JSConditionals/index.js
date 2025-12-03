console.log("Hello I am Conditional Tutorial");

// Arithmetic operators
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

// Using arithmetic operators in conditional statements
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


// Exercise

// let age= 25
// if(10<age && age<20){
//   console.log("Your age is between 10 and 20")
// }
// else {
//   console.log("Your age is not between 10 and 20")
// }

//switch case
let day = 2;
switch (day) {
  case 1:
    console.log("Yesterday");
    break;
  case 2:
    console.log("Today");
    break;  

  case 3:
    console.log("Tomorrow");
    break;
  default:
    console.log("Invalid day");
    break;

}

function checknum( num){
 
  {if ((num%2==0) && (num%3==0)){
    console.log("Divisible by 2 and 3")
  }  else {
    console.log("Not Divisible by 2 and 3")
  }
}
  {if ((num%2==0) || (num%3==0)){
    console.log("Divisible by 2 or 3")
  }  else {
    console.log("Not Divisible by 2 or 3")
  }}
}
checknum(10);
checknum(12);

number=25;
if (number >18){
  console.log("You can drive")
}
else{
  console.log("You cannot drive")
}