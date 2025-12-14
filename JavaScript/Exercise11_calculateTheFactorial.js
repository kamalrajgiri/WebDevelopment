console.log("calculating the factorial of a number");

let number = prompt("Enter a positive integer:");
number = parseInt(number);

console.log("Number entered:", number);
if (isNaN(number) || number < 0) {
    console.log("Please enter a valid positive integer.");
}   
// for (let i = number - 1; i >= 1; i--) {
//     number = number * i;
// }
// console.log("Factorial:", number);


// Using array and reduce method to calculate factorial

const arr = [];
for (let i = number; i >= 1; i--)  {
    arr[i-1] = i;
}


console.log("Array for factorial calculation:", arr);
let fact = (a,b) => {
    return a*b;
}
console.log("Factorial calculated using reduce:", arr.reduce(fact));

// Another approach using Array.from
console.log("Calculating factorial using Array.from and reduce:");
let a = number;
function factorial(number){
    let arr= Array.from(Array(number +1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b) => {
        return a*b
    }
    )
    console.log(c);
}
factorial(a)