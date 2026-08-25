//block scope and function scope

//let and const are block scope
//var is function scope

//note: var throws "undefined" if accessed before initialization, while let and const throw "Reference error"

{
  //   var lastname = "saeed";
}

{
  // console.log(lastname)
  //var is function scoped so it can console on the other block or outside a block, but will give u undefined if consoled before initialization
  //   let firstname = "ali";
  //let is block scoped it will through an error if consoled outside or before initialization
}
// console.log(firstname)

// let firstname= "muhammad";
// console.log(firstname)

// real example
// if (true) {
//   let firstname = "ali";
//   console.log(firstname);
// }
// console.log(firstname)
//cant access it outside the scope, but it were a var it can be accessed


// another
// const myfunc = () => {
//   if (true) {
//     var firstname = "ali";
//   }
// };
// console.log(firstname);
// myfunc();
//here var is defined inside myfunc and when consoled outside the func it then gave a "reference error", as its outside the func
//thus its called function scoped
