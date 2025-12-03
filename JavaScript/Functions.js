// console.log("Hey man you are great!")
// console.log("Hey man you are good!")
// console.log("Hey man your smile is great!")
// console.log("Hey man your attitude is awesome!")

function nice (name){
    console.log("Hey " + name + " you are great!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your smile is great!")
    console.log("Hey " + name + " your attitude is awesome!")
}

function sum(a, b , c= 4){
//   console.log(a + b)
  return a + b + c
}
sum (5, 10)
result = sum (20, 30)
result1 = sum (100, 200)
console.log(result)
console.log(result1)
result2 = sum (1, 2, 3)
console.log(result2)
// nice("Ravi")
// nice("Amit")

 const fun1 = (x) =>{
    console.log("i am an arrow function ", x)
 }
 fun1(7);

// Exercise : 

// print try again until user enter correct number
console.log("Welcome to the number guessing game!")

let usernumber = Number(prompt("Enter a number between 1 to 10"))

function tryagain(usernumber){
  let correctnumber = 7;
  while (usernumber !== correctnumber){
    console.log("try again")
    usernumber = Number(prompt("Enter a number between 1 to 10"))
  
  } 
    console.log("congratulations you have entered the correct number" + usernumber)
}
tryagain(usernumber);

console.log("Welcome to the Mean Calculator!")
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));
let num4 = Number(prompt("Enter fourth number: "));
let num5 = Number(prompt("Enter fifth number: "));

function mean (num1, num2, num3, num4, num5){
    let sum = num1 + num2 + num3 + num4 + num5;
    let mean = sum / 5;
    return mean;
}
let resultmean = mean(num1, num2, num3, num4, num5);
console.log("The mean of the five numbers is: " + resultmean);  



