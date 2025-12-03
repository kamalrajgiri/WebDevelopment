console.log("Welcome to the Faulty Calculator!");
/* Create a faulty calculator using Javascript 
This faulty calculator does following things :
1. It takes two numbers as input from the user
2. It performs wrong operation as follows:

+ -----> -
- -----> /
* -----> +
/ -----> **

it performs wrong opertion 10% of the time
*/


function faultyCalculator(num1, num2, op) {
    var randomNum = Math.random();
    if (randomNum < 0.1) { // 10% chance to perform faulty operation
        switch (op) {
            case '+': 
                return num1 - num2;
            case '-': 
                return num1 / num2;
            case '*':
                return num1 + num2;
            case '/':
                return Math.pow(num1, num2);
            default:
                return "Invalid operation!";
        }
    } else { // Normal operation
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return "Invalid operation!";
        }
    }
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operation = prompt("Enter operation (+, -, *, /): ");
let result = faultyCalculator(num1, num2, operation);
console.log("The result is: " + result);


