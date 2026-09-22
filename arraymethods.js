// const numbers = [4, 2, 1, 6];
//forEach() requires a callback function, and that callback can be named, anonymous, or an arrow function.

// function myFunc(number, index) {
//   console.log("index is ", index);
//   console.log(`${number}*2 = ${number * 2}`);
// }
// for (let i = 0; i <= numbers.length; i++) {
// myFunc(numbers[i], i)
// }

// numbers.forEach(myFunc)
//— A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

//OR
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// })

//OR
// Arrow function
// numbers.forEach((number, index) => {
//     console.log(index, number);
// });

// const users = [
//   { firstname: "ali", age: 23 },
//   { firstname: "muhammad", age: 24 },
//   { firstname: "saeed", age: 25 },
//   { firstname: "syed", age: 26 },
// ];

// users.forEach(function(user){
//     console.log(user.firstname)
// })

//OR

// users.forEach((user)=> {
//     console.log(user.firstname)
// })

// forEach()
//     ↓
// Do something with every element
//     ↓
// Does NOT create/return a new array

// map()
//     ↓
// Transform every element
//     ↓
// Creates and RETURNS a new array

//MAP METHOD
// const users = [
//   { firstname: "ali", age: 23 },
//   { firstname: "muhammad", age: 24 },
//   { firstname: "saeed", age: 25 },
//   { firstname: "syed", age: 26 },
// ];

// const user_data = users.map((curElem, index) => {
// return (curElem.firstname);
// });
//this will return an array

//OR

// const user_data = users.map((curElem, index) => {
//   return {index: index,
//     first_name: curElem.firstname
//   }
//this will return an array of objs
// });

// console.log(user_data);

//FILTER METHOD
//filter() is a higher-order array method that creates a new array containing only the elements that satisfy a condition.
//Only the elements where the condition is true are placed into the new array.

// const numbers = [1,3,2,6,4,8];

// const result = numbers.filter((curElem, index) =>{
//   return curElem%2===0;
// })
// console.log(result);

//REDUCE
// //reduce() is another higher-order array method. It takes all the elements of an array and reduces them down to a single value.
// const numbers = [1,2,3,4,5]
// const result = numbers.reduce((accumulator, curVal)=>{
//   return accumulator + curVal
// })
// console.log(result)

// const userCart = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "laptop", price: 22000 },
//   { productId: 3, productName: "tv", price: 15000 },
// ];
// []
// const total = userCart.reduce((accumulator, curProduct) =>{
//   return accumulator + curProduct.price
// },0)
// console.log(total)

//SORT

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort()
// console.log(numbers)

// numbers.sort((a, b) => {
//   return a - b;
// 5,9
// 5-9
//     a - b
// Result	Meaning
// Negative	a comes before b
// Positive	b comes before a
//   // 0	Their order doesn't need to change
// });
// console.log(numbers);

//price LowToHigh HighToLow
// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 900 },
//   { productId: 3, productName: "p3", price: 200 },
//   { productId: 4, productName: "p4", price: 1400 },
// ];

// lowToHigh

//but this will modify the original array which e don't want
// products.sort((a, b) => {
//   return a.price - b.price;
// });

//thus alternate will be using slice and saving it in another variable.
// const LowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(LowToHigh);

//HighToLow

// const HighToLow = products.slice(0).sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(HighToLow);


//find 
//find() calls the callback for each element. As soon as the callback returns true, find() returns that element and stops searching.
// const myArray = ["hello", "cat", "dog", "lion"];
// function isLength3(string){
//     return string.length === 3
// }

// const ans = myArray.find(isLength3);
//  console.log(ans)


//every
//  const numbers = [2,3,4,5,6]
//  const ans = numbers.every((number)=>number%2===0)

//  console.log(ans)


//splice
             