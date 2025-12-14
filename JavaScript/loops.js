console.log("Loops in JavaScript");
let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

// Using a for loop to print values from a to a+4
console.log("Using for loop:");
for (let i = 0; i < 5; i++) {
  console.log(a + i);
}

// Using for...in loop to iterate over object properties
let obj ={
    name: "Alice",
    role: "Developer",
    company : "TechCorp"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key , element)
}
// Using for...of loop to iterate over characters in a string
for (const c of "kamal") {
    console.log(c);
}

// Using a while loop to print values from a to a+4
console.log("Using while loop:");
let j = 0;
while (j < 5) {
    console.log(a + j);
    j++;
}

// Using a do-while loop to print values from a to a+4
console.log("Using do-while loop:");
let k = 0;
do {
    console.log( k);
    k++;
} while (k < 5);

console.log("Loops ended");
console.log(84-58)


// Exercise:
//using for...in loop to print student marks
var marks ={
    harry : 98,
    rohan : 70,
    aakash : 90
}
console.log("Student Marks:")
for (const grade in marks) {
    const element = marks[grade];
    console.log(grade, element);
}

// using for loop to print above marks
console.log("Using for loop to print marks:");
let keys = Object.keys(marks);
for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log(key, marks[key]);
}

let x =[1,22,333,4444,55555];
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element);
}
x.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

let obje ={
    a: 1,
    b: 2,
    c: 3
}
// for in loop to print obje
for (const key in obje) {
    if (Object.hasOwnProperty.call(obje, key)) ;
    const element = obje[key];
    console.log(key ,element)
}
// for of loop to print obje keys
for (const element of x) {
    console.log(element)
}
