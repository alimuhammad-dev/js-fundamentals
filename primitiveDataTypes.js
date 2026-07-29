//trim
// let firstName = "    Ali Muhammad Saeed    "
// console.log(firstName.length); //length 11

// firstName = firstName.trim()
// let newString = firstName.trim();
//we can either put the value back into the same string or make another string as the string is immutable, the trim will give us a new string thus new variable needed.

// console.log(firstName.length); //length 3
// console.log(newString.length); //length 3

// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// start 
// end index

// let newSlice = firstName.slice(0,5)//we will get the string from index 0 to 4 the last index mentioned will not be included
// console.log(newSlice)

//convert number to string
// let age= 22;
// console.log(typeof(age + ""))
//or
// age = String(age);

//convert string to number
// let myStr = "34";
// console.log(typeof (+ myStr));
//or
// myStr = Number(myStr);

//string concatenation
// let string1 = 'ali';
// let string2 = 'syed';

// let fullName = string1 + string2;
// console.log(fullName)

//template string
// let aboutMe = "My name is " + firstName + " and my age is" + age; //by using traditional concatenation 
// let aboutMe = `My name is ${firstName} and my age is ${age}`//by using template literals
// console.log(aboutMe)

//undefined
// let firstName;
// console.log(typeof firstName)
// firstName = 'ali';
// console.log(typeof firstName, firstName);

//null
// let myVariable = null;
// console.log(typeof myVariable, myVariable);
//type of null is obj, this is a bug, then why not fix it? because millions of lines of code are written keeping in mind this bug, if the bug gets fixed all the codes or the framework made on it have to be rewrite thus they kept the bug
// myVariable = 'ali';
// console.log(typeof myVariable, myVariable);


// //BigInt
// let myNumber = 123;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER)// there is a limit to write a number in a integer.

// let num1 = BigInt(2132323);
//both are big ints
// let num2 = 232323n;
// console.log(typeof num1, typeof num2);
//note: u cant perform expression on bigint with another bigint not just an int

//boolean and comparison operator
let num1 = 7;
let num2 = "7";
//boolean
//true or false
// console.log(num1>=num2)

//== vs ===
// console.log(num1==num2) //checks values
// console.log(num1===num2) //checks for datatypes too

//!= vs !==
console.log(num1!=num2) //checks values
console.log(num1!==num2) //checks values and datatypes too
 
