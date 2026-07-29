//primitive
let name = 'ali';
let age = 23;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;



//non primitive
//Objects are variables that can store both values and functions Objects are one of the most important concepts in JavaScript

let person = {
    name : 'ali',
    age : '23'
};
// console.log(person);

// console.log(person.name); //Dot Notation
// console.log(person.age);

let lastName = 'name';
person[lastName] = 'syed'; //Bracket Notation
// console.log(person.name)


let selectedColors = ['red', 'blue'];
// console.log(selectedColors[0]); //access using index
// console.log(selectedColors[1]);

//array is a data structure that we use to represent a list of items
selectedColors[2] = 'green'; 
selectedColors[3] = 1;
// console.log(selectedColors);
// console.log(typeof selectedColors) //the type of array is obj
// console.log( selectedColors.length) //length of array



function greet(name, lastName) { //the variable is parameter
    // console.log('Hello ' + name + ' ' + lastName);
}
//the parameter is what we have at the time of declaration but the argument is the actual value ith supply for that
greet('john' , 'Smith'); //the value here is argument

function square(number) {
    return number * number;
}

let number = square(2);
// console.log(number);