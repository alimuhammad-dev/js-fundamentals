//callback functions

function myFunc2(name) {
  console.log("inside function 2");
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
 callback("ali");
 //its a convection to name it callback when using function as an input in the parameters
}
myFunc(myFunc2)
