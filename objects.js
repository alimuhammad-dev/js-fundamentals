//Object reference type
//   const person = {
//     name: "ali",
//     age : 25,
//     hobbies: ["volleyball", "gaming"]
//   }

//   console.log(person)
//   console.log(person.name)

//   person.gender = "male"
//   console.log(person)
//   console.log(person["age"])

//diff between dot and bracket notation
// const key= "email";
// const person = {
//   name: "ali",
//   age: 25,
//   "person hobbies": ["volleyball", "gaming"],
// };
// console.log(person["person hobbies"]);

// person[key] = "example@gmail.com";
// console.log(person);

//How to iterate objects
//for in loop
// const person = {
//   name: "ali",
//   age: 25,
//   "person hobbies": ["volleyball", "gaming"],
// };

// for(let key in person){
//     console.log(`${key}: ${person[key]}`)
//     console.log(key, person[key])

// }

// console.log(Object.values(person));

// const val = Array.isArray((Object.keys(person)));
// console.log(val)

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

//computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj)

//or

// const obj = {
//     [key1] :value1,
//     [key2] :value2
// }
// console.log(obj)

//obj destructuring
// const band = {
//   bandName: "let zepplin",
//   famousSong: "stairway to heaven",
//   anotherSong: "hunza",
//   year: 1951,
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const { bandName, famousSong } = band;
//choose the attributes from obj u want to destructure,
//now those same attributes have become variables to directly use
// console.log(bandName, famousSong);

//we can also use custom names for the attributes to use as a variable
// const { bandName: var1, famousSong: var2 } = band;
// console.log(var1, var2);

//the remaining attributes can be stored separetly, here as a obj names "restProps"
// const { bandName, famousSong, ...restProps } = band;
// console.log(restProps);

//objs inside array
// const users = [
//   { userId: 1, firstName: "ali", gender: "male" },
//   { userId: 2, firstName: "muhammad", gender: "male" },
//   { userId: 3, firstName: "saeed", gender: "male" },
// ];

// for(let user of users){
//     console.log(user.firstName)
// }

//nested destructuring
// const[user1, user2, user3] = users;
// console.log(user1)
// console.log(user2)
// console.log(user3)

// we can also destructure by accessing the attributes of the obj directly to access there values
//slipped user2 by using empty brackets 
// const [{ firstName } , , { gender }] = users;
// console.log(firstName);
// console.log(gender);
