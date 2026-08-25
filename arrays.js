// JavaScript Arrays
// Arrays are objects that can hold multiple values of different data types.
// An array is an ordered collection of items.
// Arrays are reference types, and all reference types are objects.

// let mixed = [1, 2, 3, "string", null, undefined];
// console.log(mixed);
// console.log(typeof mixed); // The type of an array is "object".
// console.log(Array.isArray(mixed)); // Checks whether the value is an array.

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// console.log(fruits[0]);

// Arrays are mutable, meaning their original contents can be changed.
// fruits[1] = "banana";
// console.log(fruits);

// Array Methods

// let fruits = ["apple", "mango", "grapes"];

// console.log(fruits);

// push() adds one or more elements to the end of the array.
// fruits.push("banana");
// console.log(fruits);

// pop() removes the last element from the array and returns it.
// let poppedFruit = fruits.pop();
// console.log(`
// Fruits: ${fruits}
// Popped Fruit: ${poppedFruit}
// `);

// unshift() adds one or more elements to the beginning of the array.
// fruits.unshift("banana", "orange");
// console.log(fruits);

// shift() removes the first element from the array and returns it.
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("Removed fruit is:", removedFruit);

// Primitive vs Reference Data Types

// Primitive Data Types
// let num1 = 6;
// let num2 = num1;

// console.log("Value of num1 is:", num1);
// console.log("Value of num2 is:", num2);

// num1++;

// console.log("After increment:");
// console.log("Value of num1 is:", num1);
// console.log("Value of num2 is:", num2);

// Primitive values are stored directly in memory (conceptually in the Stack).
// When we assign num1 to num2, a copy of the value is made.
// Therefore, changing num1 does not affect num2 because each variable has its own copy.

// Reference Data Types

// Arrays are reference types.
// let arr1 = ["item1", "item2"];
// let arr2 = arr1;

// console.log("Value of arr1 is:", arr1);
// console.log("Value of arr2 is:", arr2);

// Modifying arr1
// arr1.push("item3");

// console.log("After modifying arr1:");
// console.log("Value of arr1 is:", arr1);
// console.log("Value of arr2 is:", arr2);

// Arrays (and other reference types) are stored in the Heap.
// The variable itself stores a reference (memory address) to that array.
// When we write:
//
// let arr2 = arr1;
//
// we are NOT creating a new array.
// We are copying the reference (pointer) to the same array in memory.
//
// Therefore, both arr1 and arr2 point to the exact same array.
// Any changes made through arr1 will also be visible through arr2,
// and vice versa.

// Clone of an Array

// let array1 = ["item1", "item2"];

// If one parameter is passed in slice it will return u a new array from that index to the end, as e put "0" e ill get from 0th index to last a new array
// Now the array is cloned
// let array2 = array1.slice(0);

// Or
// Create a ne array and concatenate array1 to it, we get the clone of array1
// let array2 = [].concat(array1);

// New way
// Spread operator, we will spread the elements of array1 in the new array creating a clone
// let array2 = [...array1];
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// Adding more items after cloning
// let array2 = array1.slice(0).concat(["item3", "item5"]);
// let array2 = [...array1, "item3", "item5"];

// Loops in Array

// let arr=[]
// let fruits = ["apple", "mango", "grapes", "banana"];

// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(arr[i]=fruits[i].toUpperCase());
// }
// console.log(arr);

// Using const for creating an array

// Use const when you don't want to reassign the array variable.
// The array itself is stored in the Heap,
// while the variable `fruits` stores a reference (memory address) to that array.
// A const variable cannot be reassigned to point to a different array,
// but the contents of the array can still be modified because the reference
// remains the same.

// const is commonly used for arrays because it prevents the array variable
// from being reassigned, while still allowing the array's contents to be modified.
// const fruits = ["apple", "mango"];
// fruits.push("banana");

// console.log(fruits);

// for of loop in array
// const fruits = ["apple", "mango", "banana", "grapes"];

// For Of loops runs till the length of the array automatically
// for(let fruit of fruits){
//     console.log(fruit);
// }

// Array Destructuring

const fruits = ["apple", "mango", "banana", "grapes"];

// Without destructuring:
// let val1 = fruits[0];
// let val2 = fruits[1];
// console.log(val1, val2);

// Here, we assign the array elements to variables using array destructuring.
// The values are assigned in order based on their positions in the array.
// Any remaining array elements are ignored unless we explicitly capture them.

// const [var1, var2] = fruits;
// console.log(var1, var2);

//skip elements
// const [first, , third] = fruits;

// console.log(first); // apple
// console.log(third); // banana

// const [first, second, ...remaining] = fruits;

// console.log(first); // apple
// console.log(second); // mango
// console.log(remaining); // ["banana", "grapes"]
