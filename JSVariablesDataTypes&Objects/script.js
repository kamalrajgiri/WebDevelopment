console.log("Hello, World!");

// Variable declaration
var a = 5;
a = a + 3; // Updating the value of an existing variable 
console.log(a);
{
    let a = 10; // Block-scoped variable
    console.log(a); // Outputs 10
}
console.log(a); // Outputs 8, as the outer 'a' is unchanged
{
    var a = 15; // 'var' is function-scoped, so this affects the outer 'a'
    console.log(a); // Outputs 15
}
console.log(a); // Outputs 15, as 'a' was updated in the block
var b= 6;
var c = "kamal";
console.log(a + b); 
console.log(a+b+8);
console.log(c);
console.log(typeof(c), typeof(a), typeof(b)); 
var _a = 10;
var $b = 20;
//var 5c = 30; // Invalid variable name

const pi = 3.14;
//pi = 3.14159; // This will cause an error (invalid)

let name = "Alice"; // Valid variable name globally available
let k=15;
k= 15+5;
console.log(k);

// Data Types
let x= "Hello";
let y= 22;
let z= 3.55;
const p= true;
let q= null;
let r = undefined; // undefined

console.log(x,y,z,p,q,r);
console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));

// Objects
let o ={
    name: "Kamal",
    "job code": 1234,
    ishandsome: true
}
console.log(o);
o.salary = "100k";
console.log(o);
o.salary = "120k";
console.log(o);