// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


function sortStudentsIntoHouses(students) {
    const houses = {
        Gryffindor: [],
        Hufflepuff: [],
        Ravenclaw: [],
        Slytherin: []
    };  
    students.forEach(student => {
        const nameLength = student.length;
        if (nameLength < 6) {
            houses.Gryffindor.push(student);
        } else if (nameLength < 8) {
            houses.Hufflepuff.push(student);
        } else if (nameLength < 12) {
            houses.Ravenclaw.push(student);
        } else {
            houses.Slytherin.push(student);
        }       
    });
    return houses;
}
// Example usage:
const students = ["Harry", "Hermione", "Ron", "Luna", "Draco Malfoy", "Neville Longbottom"];
const sortedHouses = sortStudentsIntoHouses(students);
console.log(sortedHouses);


// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleUniqueElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}
// Example usage:
const numbers = [0,0,1, 2, 2, 3, 4, 4, 4, 5];
const doubledUnique = doubleUniqueElements(numbers);
console.log(doubledUnique); // Output: [0, 2, 4, 6, 8, 10]



// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    const reversedStr = str.split('').reverse().join('');
    return  reversedStr;
}
// Example usage:
const originalString = "hello";
const mirrored = mirrorString(originalString);
console.log(`${originalString} => ${mirrored}`); // Output: "helloolleh"



// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const isValidLength = password.length >= 8;
    return hasUpperCase && hasLowerCase && hasDigit && isValidLength;
}
// Example usage:
const password = "password123";
const isValid = validatePassword(password);
console.log(`Is the password valid? ${isValid}`); // Output: true




// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    return sum;
}
// Example usage:
const numbersToSum = [1, 2, 3, 1, -4, 5];
const totalSum = sumUntilNegative(numbersToSum);
console.log(`Sum until negative: ${totalSum}`); // Output: 6





// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// Example usage:
const sampleString = "Hello World";
const vowelCount = countVowels(sampleString);
console.log(`Number of vowels in "${sampleString}": ${vowelCount}`);



// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}
// Example usage:
const note = { title: "Meeting Notes", content: "Discuss project timeline." };
const Notes= saveNoteToLocalStorage(note);
console.log( `Note saved succesfully : "${Notes}"`);



// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// function asyncDoubleArray(arr) {
//     return arr.map((num, index) => 
//         new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500 * (index + 1));
//         })
//     );
// }
// // Example usage:
// const nums = [1, 2, 3, 4, 5];
// const doubledPromises = asyncDoubleArray(nums);
// Promise.all(doubledPromises).then(doubledArray => {
//     console.log('Doubled Array:', doubledArray); // Output: [2, 4, 6, 8, 10]
// });


// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderDetails) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1-4 seconds
        setTimeout(() => {
            resolve(`Order for ${orderDetails.item} has been placed successfully!`);
        }, delay);
    });
}
// Example usage:
placeOrder({ item: "Laptop", quantity: 1 })
    .then(confirmationMessage => {
        console.log(confirmationMessage);
    });




// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(coffeeType) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 2000; // Random delay between 2-7 seconds
        setTimeout(() => {
            resolve(`Your ${coffeeType} is ready! Enjoy!`);
        }, delay);
    });
}
// Example usage:
brewCoffee("Espresso")
    .then(message => {
        console.log(message);
    });




// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        return Object.keys(criterion).every(key => product[key] === criterion[key]);
    });
}
// Example usage:
const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Apparel", price: 50 },
    { name: "Phone", category: "Electronics", price: 700 },
];
const filtered = filterProducts(products, { category: "Electronics" });
console.log('Filtered Products:', filtered);




// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInMinutes) {
    const expirationTime = new Date().getTime() + expiresInMinutes * 60000;
    const tokenData = { token, expirationTime };
    localStorage.setItem('authToken', JSON.stringify(tokenData));
}
// Example usage:
const authToken = setAuthToken('abc123token', 30); // Token valid for 30 minutes
console.log(`Auth token set: "${authToken}"`);




// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}
// Example usage:
const cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Keyboard", price: 80, quantity: 1 },
];
const totalCost = calculateTotal(cart);
console.log(`Total cost of shopping cart: $${totalCost}`);




// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Example usage:
// Call this function when you want to scroll to the top
smoothScrollToTop();


// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function asyncDoubleArray(arr) {
    const promises = arr.map((num, index) => 
        new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500 * (index + 1));
        })
    );
    
    const doubledArray = await Promise.all(promises);
    doubledArray.forEach((num, index) => {
        setTimeout(() => {
            console.log(num);
        }, 500 * index);
    });
    
    // Display final array at the end
    setTimeout(() => {
        console.log('Final Doubled Array:', doubledArray);
    }, 500 * doubledArray.length);
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
asyncDoubleArray(nums);