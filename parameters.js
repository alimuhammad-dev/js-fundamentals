//Default Parameters
// function addTwo(a, b = 0) {
//   return a + b;
// }
// const ans = addTwo(4);
// console.log(ans);

//Rest Parameters
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myFunc(3,4,5,6,7,8,9);
//the remaining arguments will be stored in the rest parameter ...c in an array

// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach((elem) => {
//     total = elem + total;
//   });
//   return total;
// }
// const ans = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(ans);



//param destructuring
//passing obj as a parameter


// const person = {
//   firstName: "ali",
//   gender: "male",
// };

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }
// printDetails(person);

// // OR
// function printDetails({firstName,gender}) {
//   console.log(firstName);
//   console.log(gender);
// }
// printDetails(person);

