console.log("JavaScript Arrays");
let arr= [1,2,3,4,5];
console.log("Original Array:", arr);
console.log("Array Length:", arr.length);
console.log("First Element:", arr[0]);
arr[4] = 17;
console.log("Modified Array:", arr);
arr.push(6);
console.log("After Push:", arr);
arr.pop();
console.log("After Pop:", arr);
console.log(typeof arr);
console.log(arr.toString());
console.log(arr.join(" - "));
arr.push("Hello");
console.log("After Pushing 'Hello':", arr);
arr.shift();
console.log("After Shift:", arr);
arr.unshift(0);
console.log("After Unshift:", arr);
delete arr[2];
console.log("After Deleting Index 2:", arr);
console.log(arr[2]);
console.log("Length After Deletion:", arr.length);
let arr1 = [10, 20, 30];
let combinedArr = arr.concat(arr1);
console.log("Combined Array:", combinedArr);
arr.pop();
arr[2]= 15;
console.log("Before Sorting:", arr);
arr.sort();
console.log("Sorted Array:", arr);
let numbers = [1,2,3,4,5];
numbers.splice(1,3);
console.log(numbers)
numbers.splice(1,1,20,30,40);
console.log(numbers)
numbers.slice(2);
console.log(numbers)