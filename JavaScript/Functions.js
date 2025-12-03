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