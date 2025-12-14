console.log("Javascript Array Methods: map, filter, reduce");
let arr = [1,23,43,45,56]

// let newarr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element * 2);
// }
// Using map to create a new array with elements multiplied by 2
let newarr = arr.map((value) => {
    return value * 2;
})
console.log("Original Array:", arr);
console.log("New Array after map (elements * 2):", newarr);
console.log("using filter to get elements greater than 20:");
const greaterthantwenty = (value)=>{
    if (value > 20){    
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthantwenty))
console.log(arr.filter(greaterthanthirty = (value) => value > 30));
// Using reduce to get the product of all elements in the array
let arr2 = [1,2,3,4,5];
console.log("arr2:", arr2);
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red));

//using array from to create array from string
console.log(Array.from("Hello"));