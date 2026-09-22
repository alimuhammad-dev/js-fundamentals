// //callback functions

// function myFunc2(name) {
//   console.log("inside function 2");
//   console.log(`your name is ${name}`);
// }

// function myFunc(callback) {
//  callback("ali");
//  //its a convection to name it callback when using function as an input in the parameters
// }
// myFunc(myFunc2)




//function returning function
function myFunc() {
  function hello() {
    return "hello world";
  }
  return hello;
  //myfunc is returning a funtion which is then stored in "ans" thus "ans" is a func
}

const ans = myFunc();
console.log(ans());
// ans();
//this is called function returning function
  
//Higher-Order Function is a function that does at least one of these:
//Takes another function as an argument, or Returns another function.

