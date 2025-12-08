console.log("JavaScript Strings ")
// String Declaration
let a ="Aagyat";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); // undefined
console.log(a.length); // length of string

let name = "Aagyat"
let frn = "Ankit"
console.log("his name is "+ name + " and his frnd is "+ frn); // concatenation
console.log(`his name is ${name} and his frnd is ${frn}`); // template literals

let b = 'Aagyat\'s laptop'; // escape character\
console.log(b);
let c = "Aagyat's laptop"; // no need of escape character
console.log(c);
let d = "Aagyat \n laptop"; // new line
console.log(d);
let e = "Aagyat \t laptop";
console.log(e); // tab space
let f = "Aagyat \\ laptop";
console.log(f); // \ character
let g = "Aagyat \r laptop";
console.log(g); // carriage return

// String Methods
let str = "Hello World";
console.log(str.toUpperCase()); // to upper case
console.log(str.toLowerCase()); // to lower case
console.log(str.slice(3,7)); // slice
console.log(str.length); // length of string
console.log(str.replace("World","Aagyat")); // replace

let str2 = "   Hello World   ";
console.log(str.concat(str2)); // concatenate
console.log(str2.trim()); // trim spaces
console.log(str.charAt(4)); // char at index
console.log(str.indexOf("o")); // index of character
console.log(str.lastIndexOf("o")); // last index of character
console.log(str.includes("World")); // includes
